import baseView from "./baseView.js";

class aboutView extends baseView {
  _parentElement = document.querySelector(".store_wrapper");

  _generateMarkup() {
    return `
        <div class="about_view"">
        
        <section class="content_header">
          <div class="ingress">
            This would be the About-section.
          </div>
          <div class="hanko">
            <img src="hanko_1.png" alt="" />
          </div>
        </section>
                
        </div>
        `;
  }
}

export default new aboutView();
