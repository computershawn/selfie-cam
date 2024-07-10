import "./style.css"; // Vite handles inserting CSS
import { setupVideo, takePhoto } from "./src/cam.js";

(async function run() {
  const button = document.querySelector("#take-photo");
  const canvas = document.querySelector("canvas");
  const video = await setupVideo();

  button.addEventListener("click", () => {
    takePhoto(video, canvas);
  });
})();
