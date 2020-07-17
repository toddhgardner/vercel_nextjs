import { TrackJS } from "../../utils/trackjs-isomorphic.js";

export default (req, res) => {

  TrackJS.usage();
  res.status(200).json({ text: "fuckyou" });

}