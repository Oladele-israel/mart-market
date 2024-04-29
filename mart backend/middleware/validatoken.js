import jwt from "jsonwebtoken";
import users from "../models/users.model.js";

export const checkAndRenewToken = (req, res, next) => {
  const shortlived = req.cookies.hellobro;
  const longlived = req.cookies.hellosis;
  ("short lived token => ", shortlived);
  ("long lived", longlived);
  if (!shortlived) {
    if (!longlived) {
      return res.status(404).json({ valid: false, message: "Nothing found" });
    } else {
      jwt.verify(
        longlived,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
          ("decoded from renew => ", decoded);
          if (err) {
            return res
              .status(404)
              .json({
                valid: false,
                message: "Nothing found from reset token",
              });
          } else {
            // checking the decoded
            // req.id = decoded.access2;
            const validuser = await users.findById(decoded.access2).exec();
            // ("the request id from renew => ", req.id);
            ("the valid user from renew => ", validuser);
            // ("the request from rtefresh => ", req);
            if (!validuser) {
              return res
                .status(404)
                .json({ valid: false, message: "No details found from renew" });
            }
            const accessToken = jwt.sign(
              {
                access1: validuser?.username,
                access2: validuser?._id,
              },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: "30s",
              }
            );
            ("the new access token => ", accessToken);
            res.cookie("hellobro", accessToken, {
              httpOnly: true,
              secure: true,
              sameSite: "none",
              maxAge: 30 * 1000,
            });
            const { password, ...rest } = validuser._doc;
            req.user = rest;
            next(); // Call next middleware
          }
        }
      );
    }
  } else {
    jwt.verify(
      shortlived,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, decoded) => {
        ("the decoded user => ", decoded);
        if (err) {
          return res
            .status(404)
            .json({ valid: false, message: "Nothing found" });
        } else {
          req.id = decoded.access2;
          // checking the decoded
          const validuser = await users.findById(decoded.access2).exec();
          ("request id => ", req.id);
          ("the valid user from reset => ", validuser);
          if (!validuser) {
            return res
              .status(404)
              .json({ valid: false, message: "No valid Details found" });
          }
          const { password, ...rest } = validuser._doc;
          req.user = rest;
          next(); // Call next middleware
        }
      }
    );
  }
};
