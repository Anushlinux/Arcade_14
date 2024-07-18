import React from "react";
import "../styles/Footer2.css";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import Logo from "../imgs/Datazen-White.png";

function Footer2() {
  return (
    <div className="footer-container">
      <div></div>
      <img src={Logo} alt="" fill="white" className="footer-logo" />

      <div className="footer-socials">
        <div className="footer-contact">Contact Us</div>

        <div className="footer-icons">
          {/* Whatsapp Link */}

          <a href="https://chat.whatsapp.com/DvtXlgluimfIygi9zzCw9e">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 41 41"
              fill="none"
              className="iconz"
            >
              <path
                d="M34.6462 6.59718C32.7844 4.76554 30.5672 3.31341 28.1239 2.3254C25.6805 1.33739 23.0599 0.833269 20.4147 0.842407C9.33047 0.842407 0.297108 9.64527 0.286955 20.4522C0.286955 23.9134 1.21593 27.2807 2.96981 30.262L0.124512 40.4281L10.795 37.7016C13.7469 39.2675 17.054 40.0883 20.4147 40.0891H20.4248C31.5116 40.0891 40.5424 31.2863 40.5526 20.4695C40.5551 17.8916 40.0343 15.3387 39.0202 12.9578C38.0061 10.5769 36.5212 8.41523 34.6462 6.59718ZM20.4147 36.7689C17.4171 36.7699 14.4746 35.9836 11.8966 34.4927L11.2874 34.1364L4.9572 35.7545L6.64762 29.735L6.25167 29.114C4.57598 26.517 3.68975 23.5102 3.69572 20.4423C3.69572 11.4712 11.2011 4.15276 20.4248 4.15276C22.6222 4.14892 24.7987 4.56909 26.8287 5.38905C28.8587 6.20901 30.7022 7.41254 32.2527 8.93026C33.8087 10.4421 35.0422 12.2392 35.8821 14.218C36.722 16.1968 37.1517 18.3181 37.1463 20.4596C37.1362 29.4629 29.6308 36.7689 20.4147 36.7689ZM29.5902 24.5617C29.0902 24.3167 26.6205 23.1316 26.156 22.9634C25.6941 22.8026 25.3565 22.7184 25.0265 23.2083C24.689 23.6957 23.7245 24.8066 23.4351 25.1258C23.1458 25.4548 22.8463 25.4919 22.3437 25.2495C21.8437 25.002 20.2218 24.4874 18.3029 22.8125C16.8054 21.5136 15.8028 19.9054 15.5033 19.418C15.214 18.9281 15.4754 18.6659 15.7267 18.4209C15.9475 18.2032 16.2267 17.8469 16.478 17.5649C16.7318 17.2828 16.8155 17.075 16.9805 16.7484C17.1455 16.4169 17.0668 16.1349 16.9425 15.8899C16.8155 15.645 15.813 13.2278 15.3891 12.253C14.983 11.2906 14.5693 11.4242 14.2596 11.4118C13.9703 11.3945 13.6327 11.3945 13.2951 11.3945C13.0402 11.4006 12.7893 11.4581 12.5583 11.5633C12.3272 11.6684 12.1209 11.819 11.9524 12.0056C11.4905 12.4954 10.1985 13.6805 10.1985 16.0977C10.1985 18.5149 12.0006 20.8381 12.2544 21.1672C12.5032 21.4962 15.7927 26.442 20.8411 28.5697C22.034 29.0769 22.9732 29.3763 23.7067 29.6039C24.9123 29.9799 26.0012 29.923 26.8693 29.8018C27.8338 29.6583 29.8415 28.6142 30.2653 27.4687C30.6816 26.3207 30.6816 25.341 30.5547 25.1357C30.4303 24.9278 30.0927 24.8066 29.5902 24.5617Z"
                fill="white"
              />
            </svg>
          </a>

          {/* Discord Link */}

          <a href=" https://discord.com/invite/kgNcyF7aye">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 39 34"
              fill="none"
              className="iconz"
            >
              <path
                d="M32.4833 2.93625C30.0257 1.65387 27.4324 0.738612 24.7681 0.213297C24.744 0.208674 24.7192 0.212666 24.6972 0.224724C24.6751 0.236781 24.6569 0.256312 24.645 0.28063C24.311 0.95396 23.9414 1.83468 23.6832 2.52417C20.8113 2.02862 17.8901 2.02862 15.0181 2.52417C14.7301 1.75609 14.4043 1.00705 14.0422 0.28063C14.03 0.256578 14.0118 0.237272 13.9898 0.225254C13.9678 0.213235 13.9431 0.209067 13.919 0.213297C11.2541 0.735801 8.66026 1.65153 6.20381 2.93625C6.18279 2.94537 6.1652 2.9625 6.15406 2.98473C1.24116 11.3313 -0.106695 19.4732 0.554202 27.5128C0.556571 27.5505 0.57789 27.5882 0.603947 27.6125C3.46481 30.022 6.66476 31.8616 10.0673 33.053C10.0914 33.0616 10.1172 33.0613 10.141 33.0521C10.1649 33.0429 10.1855 33.0253 10.2 33.0018C10.9296 31.8706 11.5786 30.6775 12.1377 29.4224C12.1493 29.3965 12.1533 29.3671 12.149 29.3385C12.1448 29.3098 12.1325 29.2835 12.114 29.2635C12.1017 29.2503 12.0872 29.2402 12.0713 29.2339C11.0508 28.7879 10.0623 28.2521 9.11507 27.6313C9.08861 27.6143 9.06893 27.5863 9.06011 27.5532C9.0513 27.5201 9.05401 27.4844 9.06769 27.4536C9.07575 27.4335 9.08794 27.416 9.10323 27.4024C9.30221 27.2327 9.50119 27.055 9.69069 26.8772C9.70743 26.8619 9.72752 26.8521 9.7488 26.8487C9.77008 26.8454 9.79175 26.8487 9.8115 26.8583C16.0154 30.0796 22.731 30.0796 28.8591 26.8583C28.8795 26.8483 28.902 26.8447 28.9241 26.848C28.9463 26.8513 28.9672 26.8614 28.9846 26.8772C29.1741 27.055 29.3731 27.2327 29.5721 27.4024C29.5882 27.4158 29.6012 27.4335 29.6098 27.454C29.6184 27.4745 29.6224 27.4971 29.6215 27.5198C29.6205 27.5424 29.6147 27.5645 29.6044 27.584C29.5941 27.6034 29.5798 27.6197 29.5626 27.6313C28.6175 28.2578 27.6278 28.7929 26.604 29.2312C26.5876 29.2379 26.5728 29.2486 26.5605 29.2626C26.5482 29.2765 26.5388 29.2934 26.5329 29.312C26.5274 29.3299 26.5252 29.349 26.5265 29.368C26.5277 29.387 26.5323 29.4055 26.54 29.4224C27.1085 30.6748 27.7599 31.8706 28.4753 33.0018C28.4898 33.0253 28.5104 33.0429 28.5343 33.0521C28.5581 33.0613 28.584 33.0616 28.608 33.053C32.0162 31.8653 35.2214 30.0254 38.0856 27.6125C38.0999 27.6012 38.1118 27.5864 38.1205 27.5691C38.1291 27.5519 38.1342 27.5326 38.1353 27.5128C38.9265 18.2182 36.8112 10.1436 32.5307 2.98742C32.5264 2.9756 32.52 2.96494 32.5118 2.95612C32.5037 2.94731 32.494 2.94054 32.4833 2.93625ZM13.0639 22.6164C11.1949 22.6164 9.65753 20.6664 9.65753 18.2747C9.65753 15.8804 11.1665 13.9304 13.0639 13.9304C14.9755 13.9304 16.4986 15.8965 16.4702 18.2747C16.4702 20.6664 14.9613 22.6164 13.0639 22.6164ZM25.6564 22.6164C23.7898 22.6164 22.2501 20.6664 22.2501 18.2747C22.2501 15.8804 23.759 13.9304 25.6564 13.9304C27.5681 13.9304 29.0936 15.8965 29.0628 18.2747C29.0628 20.6664 27.5681 22.6164 25.6564 22.6164Z"
                fill="white"
              />
            </svg>
          </a>

          {/* Linktree Link */}

          <a href="https://linktr.ee/DataZenCouncil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 37"
              fill="none"
              className="iconz"
            >
              <path
                d="M17.5014 9.35923L23.541 3.14654L27.0471 6.73804L20.7134 12.7817H29.6228V17.7691H20.6697L27.0471 23.9682L23.541 27.4903L14.8849 18.7847L6.2274 27.4903L2.72125 23.9818L9.09867 17.7827H0.144043V12.7817H9.05494L2.72125 6.73955L6.22589 3.14654L12.2655 9.35923V0.526855H17.5014V9.35923ZM12.2655 24.9113H17.5014V36.7437H12.2655V24.9113Z"
                fill="white"
              />
            </svg>
          </a>

          {/* Instagram Link */}

          <a href="https://instagram.com/datazensomaiya?igshid=YTQwZjQ0NmI0OA">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 35 35"
              fill="none"
              className="iconz"
            >
              <path
                d="M17.7339 0.369141C13.0483 0.369141 12.4591 0.390723 10.6181 0.472738C8.77711 0.559068 7.52315 0.848276 6.4246 1.27561C5.27228 1.70904 4.22854 2.38891 3.36633 3.2677C2.48808 4.13035 1.80829 5.17396 1.37425 6.32596C0.946909 7.42236 0.655543 8.67848 0.57137 10.513C0.489356 12.3583 0.467773 12.9454 0.467773 17.6375C0.467773 22.3252 0.489356 22.9123 0.57137 24.7533C0.657701 26.5921 0.946909 27.8461 1.37425 28.9446C1.81669 30.0799 2.4059 31.0425 3.36633 32.0029C4.3246 32.9633 5.28719 33.5547 6.42244 33.995C7.52315 34.4223 8.77495 34.7137 10.6138 34.7978C12.457 34.8799 13.044 34.9014 17.7339 34.9014C22.4238 34.9014 23.0087 34.8799 24.8519 34.7978C26.6886 34.7115 27.9469 34.4223 29.0454 33.995C30.197 33.5613 31.24 32.8815 32.1015 32.0029C33.062 31.0425 33.6512 30.0799 34.0936 28.9446C34.5188 27.8461 34.8101 26.5921 34.8965 24.7533C34.9785 22.9123 35.0001 22.3252 35.0001 17.6353C35.0001 12.9454 34.9785 12.3583 34.8965 10.5152C34.8101 8.67848 34.5188 7.42236 34.0936 6.32596C33.6596 5.17393 32.9798 4.1303 32.1015 3.2677C31.2396 2.38858 30.1958 1.70866 29.0433 1.27561C27.9425 0.848276 26.6864 0.55691 24.8497 0.472738C23.0066 0.390723 22.4217 0.369141 17.7296 0.369141H17.7361H17.7339ZM16.1864 3.48136H17.7361C22.3461 3.48136 22.8922 3.49647 24.7116 3.58064C26.3951 3.65618 27.3102 3.93892 27.9188 4.17417C28.7238 4.48712 29.3001 4.86266 29.9044 5.46697C30.5087 6.07129 30.8821 6.64539 31.195 7.45258C31.4325 8.05905 31.713 8.97416 31.7886 10.6576C31.8727 12.477 31.89 13.0231 31.89 17.631C31.89 22.2389 31.8727 22.7871 31.7886 24.6065C31.713 26.2899 31.4303 27.2029 31.195 27.8115C30.9182 28.5612 30.4764 29.2391 29.9022 29.795C29.2979 30.3993 28.7238 30.7727 27.9166 31.0856C27.3123 31.323 26.3972 31.6036 24.7116 31.6813C22.8922 31.7633 22.3461 31.7827 17.7361 31.7827C13.126 31.7827 12.5778 31.7633 10.7584 31.6813C9.07495 31.6036 8.162 31.323 7.55337 31.0856C6.80337 30.8092 6.12487 30.3682 5.56776 29.795C4.99313 29.2382 4.55062 28.5597 4.2728 27.8094C4.03755 27.2029 3.75482 26.2878 3.67928 24.6043C3.59726 22.7849 3.58 22.2389 3.58 17.6267C3.58 13.0166 3.59726 12.4727 3.67928 10.6533C3.75698 8.96984 4.03755 8.05474 4.27496 7.4461C4.58791 6.64107 4.96345 6.06481 5.56776 5.4605C6.17208 4.85618 6.74618 4.4828 7.55337 4.16985C8.162 3.93244 9.07495 3.65187 10.7584 3.57417C12.3512 3.50079 12.9685 3.47921 16.1864 3.47705V3.48136ZM26.9519 6.34755C26.6798 6.34755 26.4104 6.40114 26.159 6.50526C25.9076 6.60939 25.6792 6.762 25.4868 6.9544C25.2944 7.1468 25.1418 7.37521 25.0377 7.62659C24.9335 7.87797 24.88 8.14739 24.88 8.41948C24.88 8.69157 24.9335 8.961 25.0377 9.21238C25.1418 9.46376 25.2944 9.69217 25.4868 9.88457C25.6792 10.077 25.9076 10.2296 26.159 10.3337C26.4104 10.4378 26.6798 10.4914 26.9519 10.4914C27.5014 10.4914 28.0284 10.2731 28.417 9.88457C28.8055 9.496 29.0238 8.969 29.0238 8.41948C29.0238 7.86997 28.8055 7.34297 28.417 6.9544C28.0284 6.56584 27.5014 6.34755 26.9519 6.34755ZM17.7361 8.76912C16.56 8.75077 15.392 8.96657 14.3001 9.40396C13.2082 9.84134 12.2142 10.4916 11.376 11.3168C10.5378 12.142 9.87214 13.1257 9.41777 14.2107C8.96341 15.2956 8.72941 16.4601 8.72941 17.6364C8.72941 18.8126 8.96341 19.9771 9.41777 21.0621C9.87214 22.147 10.5378 23.1307 11.376 23.9559C12.2142 24.7812 13.2082 25.4314 14.3001 25.8688C15.392 26.3062 16.56 26.522 17.7361 26.5036C20.0639 26.4673 22.284 25.5171 23.9173 23.8581C25.5506 22.1991 26.4661 19.9644 26.4661 17.6364C26.4661 15.3083 25.5506 13.0736 23.9173 11.4146C22.284 9.75564 20.0639 8.80544 17.7361 8.76912ZM17.7361 11.8792C19.2627 11.8792 20.7268 12.4856 21.8063 13.5651C22.8857 14.6446 23.4922 16.1087 23.4922 17.6353C23.4922 19.1619 22.8857 20.626 21.8063 21.7055C20.7268 22.785 19.2627 23.3914 17.7361 23.3914C16.2095 23.3914 14.7454 22.785 13.6659 21.7055C12.5864 20.626 11.98 19.1619 11.98 17.6353C11.98 16.1087 12.5864 14.6446 13.6659 13.5651C14.7454 12.4856 16.2095 11.8792 17.7361 11.8792Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="love-by-CodeCell">
        {" "}
        Made with ❤️ by KJSCE CodeCell
        {/* (<a href="https://www.linkedin.com/in/minav-karia-b10aa2243/" className='link'>Minav Karia</a>  & <a href="" className='link'></a>Sharanya Chaudhuri) */}
      </div>
    </div>
  );
}

export default Footer2;
