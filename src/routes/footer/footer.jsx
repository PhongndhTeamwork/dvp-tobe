import "./footer";

const Footer = () => {
   return (
      <footer>
         <footer class="footer">
            <div class="wrapper">
               <div class="wrapper-flex">
                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25 info">
                     <div class="info__header">
                        <h1 class="info__header-logo">Logo</h1>
                     </div>
                     <div class="info__content">
                        <h6 class="text">
                           Công ty TNHH 1 thành viên DVP media
                        </h6>
                        <h6 class="text">GCNĐKKD: 0108755817</h6>
                        <h6 class="text">Cấp ngày: 01/01/2024</h6>
                        <h6 class="text">
                           Nơi cấp: Sở Kế Hoạch Đầu Tư Thành phố Hà Nội
                        </h6>
                     </div>
                  </div>

                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25 info address">
                     <div class="info__header">
                        <h3 class="heading">Hà Nội</h3>
                     </div>
                     <div class="info__content">
                        <h6 class="text">
                           Số 67 phố Láng Hạ, quận Đống Đa, <br />
                           tp Hà Nội
                        </h6>
                        <h6 class="text">+84 988 123 456</h6>
                        <h6 class="text">dvp.media@gmail.com</h6>
                        <h6 class="text">
                           <a href="" class="website-link">
                              www.dvpmedia.com
                           </a>
                        </h6>
                     </div>
                  </div>

                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25 info location">
                     <div class="info__header">
                        <h3 class="heading">Bản đồ</h3>
                     </div>
                     <div class="info__content location__map">
                        <iframe
                           class="location__map-link"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.7824199424376!2d105.8175071671402!3d21.01192097903609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9d54df9633%3A0xc6669ca3a3fd9129!2zS8OtbmggTeG6r3QgSMOgIFRow6BuaA!5e0!3m2!1svi!2sus!4v1714187539680!5m2!1svi!2sus"
                           allowfullscreen=""
                           loading="lazy"
                           referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                     </div>
                  </div>

                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25 info connect">
                     <div class="info__header">
                        <h3 class="heading">Kết nối</h3>
                     </div>
                     <div class="info__content">
                        <a href="" class="social-link">
                           Facebook
                        </a>
                        <a href="" class="social-link">
                           Instagram
                        </a>
                        <a href="" class="social-link">
                           Zalo
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </footer>

         <div class="copyright">
            <img src="./assets/img/svg/copyright.svg" alt="Copyright" />
            <h6 class="copyright__text">Copyright by DVP media 2021</h6>
         </div>
      </footer>
   );
};

export default Footer;
