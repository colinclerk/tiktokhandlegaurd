import { requireSession, users } from "@clerk/clerk-sdk-node";

export default requireSession(async (req, res) => {
  if (req.body.handle && req.body.handle != "") {
    await users.updateUser(req.session.userId, {
      publicMetadata: { tikTokHandle: req.body.handle },
    });
    res.statusCode = 200;
    res.json({ success: true });
  } else {
    res.statusCode = 400;
    res.json({ error: "Handle required" });
  }
});
