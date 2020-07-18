import { TrackJS } from "../../utils/trackjs-isomorphic.js";

if (!TrackJS.isInstalled()) {
  TrackJS.install({
    token: "fake",
    usageURL: "https://nextjs-tau-azure.vercel.app/api/timeout"
  });
}

export default (req, res) => {

  TrackJS.usage();
  res.status(200).json({ text: "fuckyou" });

}