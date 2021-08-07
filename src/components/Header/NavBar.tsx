import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import { FlexGrow, ToolbarContainer, H1, H3, Logo, StyledLink } from "./style";
import SearchBar from "./SearchBar";
import Avatar from "./Avatar";
import { StyledButton } from "../OpportunityCard/style";

const NavBar = () => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("/Dashboard");
  };

  const handleProfileClick = () => {
    history.push("/profile");
  };

  return (
    <Toolbar style={{backgroundColor: "#2836D1"}}>
      <div style={logoContainerStyle}>
        <div 
          onClick={handleLogoClick}
          style={logoStyle}>
          {/* iContribute Logo */}
          <svg width="209" height="54" viewBox="0 0 209 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M53.8318 18.0092H56.8318V30.8252H53.8318V18.0092ZM55.3438 15.8972C54.7998 15.8972 54.3438 15.7292 53.9758 15.3932C53.6078 15.0412 53.4238 14.6092 53.4238 14.0972C53.4238 13.5852 53.6078 13.1612 53.9758 12.8252C54.3438 12.4732 54.7998 12.2972 55.3438 12.2972C55.8878 12.2972 56.3438 12.4652 56.7118 12.8012C57.0798 13.1212 57.2638 13.5292 57.2638 14.0252C57.2638 14.5532 57.0798 15.0012 56.7118 15.3692C56.3598 15.7212 55.9038 15.8972 55.3438 15.8972ZM68.8333 31.0652C67.1373 31.0652 65.6013 30.6972 64.2253 29.9612C62.8653 29.2092 61.7933 28.1772 61.0093 26.8652C60.2413 25.5532 59.8573 24.0732 59.8573 22.4252C59.8573 20.7772 60.2493 19.2972 61.0333 17.9852C61.8173 16.6732 62.8893 15.6492 64.2493 14.9132C65.6253 14.1612 67.1613 13.7852 68.8573 13.7852C70.2333 13.7852 71.4893 14.0252 72.6253 14.5052C73.7613 14.9852 74.7213 15.6812 75.5053 16.5932L73.4893 18.4892C72.2733 17.1772 70.7773 16.5212 69.0013 16.5212C67.8493 16.5212 66.8173 16.7772 65.9053 17.2892C64.9933 17.7852 64.2813 18.4812 63.7693 19.3772C63.2573 20.2732 63.0013 21.2892 63.0013 22.4252C63.0013 23.5612 63.2573 24.5772 63.7693 25.4732C64.2813 26.3692 64.9933 27.0732 65.9053 27.5852C66.8173 28.0812 67.8493 28.3292 69.0013 28.3292C70.7773 28.3292 72.2733 27.6652 73.4893 26.3372L75.5053 28.2572C74.7213 29.1692 73.7533 29.8652 72.6013 30.3452C71.4653 30.8252 70.2093 31.0652 68.8333 31.0652ZM83.4981 30.9932C82.2021 30.9932 81.0341 30.7132 79.9941 30.1532C78.9541 29.5932 78.1381 28.8172 77.5461 27.8252C76.9701 26.8172 76.6821 25.6812 76.6821 24.4172C76.6821 23.1532 76.9701 22.0252 77.5461 21.0332C78.1381 20.0412 78.9541 19.2652 79.9941 18.7052C81.0341 18.1452 82.2021 17.8652 83.4981 17.8652C84.8101 17.8652 85.9861 18.1452 87.0261 18.7052C88.0661 19.2652 88.8741 20.0412 89.4501 21.0332C90.0421 22.0252 90.3381 23.1532 90.3381 24.4172C90.3381 25.6812 90.0421 26.8172 89.4501 27.8252C88.8741 28.8172 88.0661 29.5932 87.0261 30.1532C85.9861 30.7132 84.8101 30.9932 83.4981 30.9932ZM83.4981 28.4252C84.6021 28.4252 85.5141 28.0572 86.2341 27.3212C86.9541 26.5852 87.3141 25.6172 87.3141 24.4172C87.3141 23.2172 86.9541 22.2492 86.2341 21.5132C85.5141 20.7772 84.6021 20.4092 83.4981 20.4092C82.3941 20.4092 81.4821 20.7772 80.7621 21.5132C80.0581 22.2492 79.7061 23.2172 79.7061 24.4172C79.7061 25.6172 80.0581 26.5852 80.7621 27.3212C81.4821 28.0572 82.3941 28.4252 83.4981 28.4252ZM100.479 17.8652C102.095 17.8652 103.391 18.3372 104.367 19.2812C105.343 20.2252 105.831 21.6252 105.831 23.4812V30.8252H102.831V23.8652C102.831 22.7452 102.567 21.9052 102.039 21.3452C101.511 20.7692 100.759 20.4812 99.7828 20.4812C98.6788 20.4812 97.8068 20.8172 97.1668 21.4892C96.5268 22.1452 96.2068 23.0972 96.2068 24.3452V30.8252H93.2068V18.0092H96.0628V19.6652C96.5588 19.0732 97.1828 18.6252 97.9348 18.3212C98.6868 18.0172 99.5348 17.8652 100.479 17.8652ZM117.341 30.1292C116.989 30.4172 116.557 30.6332 116.045 30.7772C115.549 30.9212 115.021 30.9932 114.461 30.9932C113.053 30.9932 111.965 30.6252 111.197 29.8892C110.429 29.1532 110.045 28.0812 110.045 26.6732V20.5052H107.933V18.1052H110.045V15.1772H113.045V18.1052H116.477V20.5052H113.045V26.6012C113.045 27.2252 113.197 27.7052 113.501 28.0412C113.805 28.3612 114.245 28.5212 114.821 28.5212C115.493 28.5212 116.053 28.3452 116.501 27.9932L117.341 30.1292ZM122.664 19.8812C123.528 18.5372 125.048 17.8652 127.224 17.8652V20.7212C126.968 20.6732 126.736 20.6492 126.528 20.6492C125.36 20.6492 124.448 20.9932 123.792 21.6812C123.136 22.3532 122.808 23.3292 122.808 24.6092V30.8252H119.808V18.0092H122.664V19.8812ZM129.769 18.0092H132.769V30.8252H129.769V18.0092ZM131.281 15.8972C130.737 15.8972 130.281 15.7292 129.913 15.3932C129.545 15.0412 129.361 14.6092 129.361 14.0972C129.361 13.5852 129.545 13.1612 129.913 12.8252C130.281 12.4732 130.737 12.2972 131.281 12.2972C131.825 12.2972 132.281 12.4652 132.649 12.8012C133.017 13.1212 133.201 13.5292 133.201 14.0252C133.201 14.5532 133.017 15.0012 132.649 15.3692C132.297 15.7212 131.841 15.8972 131.281 15.8972ZM143.811 17.8652C145.059 17.8652 146.171 18.1372 147.147 18.6812C148.139 19.2252 148.915 19.9932 149.475 20.9852C150.035 21.9772 150.315 23.1212 150.315 24.4172C150.315 25.7132 150.035 26.8652 149.475 27.8732C148.915 28.8652 148.139 29.6332 147.147 30.1772C146.171 30.7212 145.059 30.9932 143.811 30.9932C142.931 30.9932 142.123 30.8412 141.387 30.5372C140.667 30.2332 140.059 29.7772 139.563 29.1692V30.8252H136.707V13.0172H139.707V19.5692C140.219 19.0092 140.819 18.5852 141.507 18.2972C142.211 18.0092 142.979 17.8652 143.811 17.8652ZM143.475 28.4252C144.579 28.4252 145.483 28.0572 146.187 27.3212C146.907 26.5852 147.267 25.6172 147.267 24.4172C147.267 23.2172 146.907 22.2492 146.187 21.5132C145.483 20.7772 144.579 20.4092 143.475 20.4092C142.755 20.4092 142.107 20.5772 141.531 20.9132C140.955 21.2332 140.499 21.6972 140.163 22.3052C139.827 22.9132 139.659 23.6172 139.659 24.4172C139.659 25.2172 139.827 25.9212 140.163 26.5292C140.499 27.1372 140.955 27.6092 141.531 27.9452C142.107 28.2652 142.755 28.4252 143.475 28.4252ZM165.568 18.0092V30.8252H162.712V29.1932C162.232 29.7692 161.632 30.2172 160.912 30.5372C160.192 30.8412 159.416 30.9932 158.584 30.9932C156.872 30.9932 155.52 30.5212 154.528 29.5772C153.552 28.6172 153.064 27.2012 153.064 25.3292V18.0092H156.064V24.9212C156.064 26.0732 156.32 26.9372 156.832 27.5132C157.36 28.0732 158.104 28.3532 159.064 28.3532C160.136 28.3532 160.984 28.0252 161.608 27.3692C162.248 26.6972 162.568 25.7372 162.568 24.4892V18.0092H165.568ZM177.2 30.1292C176.848 30.4172 176.416 30.6332 175.904 30.7772C175.408 30.9212 174.88 30.9932 174.32 30.9932C172.912 30.9932 171.824 30.6252 171.056 29.8892C170.288 29.1532 169.904 28.0812 169.904 26.6732V20.5052H167.792V18.1052H169.904V15.1772H172.904V18.1052H176.336V20.5052H172.904V26.6012C172.904 27.2252 173.056 27.7052 173.36 28.0412C173.664 28.3612 174.104 28.5212 174.68 28.5212C175.352 28.5212 175.912 28.3452 176.36 27.9932L177.2 30.1292ZM191.294 24.4892C191.294 24.6972 191.278 24.9932 191.246 25.3772H181.19C181.366 26.3212 181.822 27.0732 182.558 27.6332C183.31 28.1772 184.238 28.4492 185.342 28.4492C186.75 28.4492 187.91 27.9852 188.822 27.0572L190.43 28.9052C189.854 29.5932 189.126 30.1132 188.246 30.4652C187.366 30.8172 186.374 30.9932 185.27 30.9932C183.862 30.9932 182.622 30.7132 181.55 30.1532C180.478 29.5932 179.646 28.8172 179.054 27.8252C178.478 26.8172 178.19 25.6812 178.19 24.4172C178.19 23.1692 178.47 22.0492 179.03 21.0572C179.606 20.0492 180.398 19.2652 181.406 18.7052C182.414 18.1452 183.55 17.8652 184.814 17.8652C186.062 17.8652 187.174 18.1452 188.15 18.7052C189.142 19.2492 189.91 20.0252 190.454 21.0332C191.014 22.0252 191.294 23.1772 191.294 24.4892ZM184.814 20.2652C183.854 20.2652 183.038 20.5532 182.366 21.1292C181.71 21.6892 181.31 22.4412 181.166 23.3852H188.438C188.31 22.4572 187.918 21.7052 187.262 21.1292C186.606 20.5532 185.79 20.2652 184.814 20.2652Z" fill="#FEFEFF"/>
          <path d="M41.0447 18.7742C40.21 18.5492 39.3212 18.6048 38.5234 18.9317C37.7472 19.2565 37.0211 19.8429 36.2699 20.6281C35.5188 21.4133 34.68 22.453 33.681 23.7277C32.8372 24.7988 31.8683 26.0493 30.7115 27.4888C30.3574 26.8437 29.8031 26.3224 29.1266 25.9984C28.9527 25.9165 28.7617 25.8742 28.5683 25.8748H22.6067C22.9172 23.1194 23.3303 20.5118 24.4796 18.195C25.6914 18.7185 26.8031 18.8833 27.7996 18.7112C28.9013 18.5042 29.8794 17.8973 30.5338 17.0148C31.8833 15.299 32.4366 12.5775 32.3916 9.85121C32.3869 9.62397 32.2969 9.40616 32.1384 9.23847C31.9799 9.07079 31.7637 8.96469 31.5303 8.94C28.1376 8.58618 25.5562 9.55797 24.089 11.2544C22.6218 12.9508 22.3539 15.2772 23.4155 17.4074C23.4298 17.4349 23.4457 17.4616 23.463 17.4874C23.1119 18.1743 22.8139 18.8855 22.5717 19.6151C22.3489 15.253 21.5702 11.6179 19.9352 8.86245C21.0018 6.74197 21.2647 4.53181 19.8551 2.80392C18.4454 1.07602 15.4434 0.0484967 10.6436 2.84568e-05C10.3857 -0.00190972 10.1376 0.0952273 9.95359 0.270135C9.76959 0.445042 9.66478 0.683441 9.66214 0.933043C9.6371 4.85413 10.7563 7.48838 12.6442 8.89153C14.3968 10.2026 16.6928 10.3213 18.9512 9.61856C21.0619 13.2949 21.6303 18.7815 21.3248 25.8869H19.6748C18.8733 25.6289 18.104 25.2851 17.3813 24.8618C16.5676 24.4183 15.6512 23.8925 14.6447 23.4078C12.1906 22.167 9.43381 21.5965 6.6701 21.7574C5.33057 21.8277 3.93346 22.5426 2.83179 23.2672C1.96756 23.8397 1.15281 24.4791 0.395599 25.1793C0.271054 25.295 0.171846 25.4339 0.103883 25.5875C0.0359197 25.7411 0.00059084 25.9064 0 26.0735V32.0739C0.00130189 32.2463 0.0378359 32.4167 0.107496 32.5753C0.177156 32.7339 0.278565 32.8777 0.405878 32.9982C0.53319 33.1187 0.683888 33.2136 0.849286 33.2775C1.01468 33.3414 1.19151 33.373 1.36957 33.3704C5.57595 33.3268 9.08126 34.7203 12.2686 36.1307C13.8485 36.8287 15.3783 37.5436 16.8405 38.0573C18.3027 38.5711 19.7474 38.8958 21.2046 38.8134C23.6709 38.8134 25.7615 37.895 29.4246 36.39H29.4521C32.0564 35.8945 34.4217 34.5881 36.1873 32.6701C36.2636 32.583 36.3269 32.4859 36.3751 32.3817L41.8684 20.507C41.9523 20.3431 41.9972 20.1631 41.9999 19.9803C42.0026 19.7974 41.963 19.6163 41.884 19.4502C41.805 19.2841 41.6887 19.1372 41.5434 19.0202C41.3982 18.9032 41.2278 18.8192 41.0447 18.7742ZM25.0379 12.0177C26.1446 10.7382 28.1952 9.85363 31.1547 10.1057C31.1547 12.6309 30.6189 14.9258 29.5498 16.2829C29.0841 16.9301 28.3781 17.3781 27.5793 17.5334C26.9058 17.6498 26.077 17.5552 25.0755 17.136C25.9295 15.7807 27.0529 14.6028 28.3805 13.6705C28.5133 13.5763 28.602 13.435 28.6271 13.2775C28.6523 13.12 28.6117 12.9593 28.5144 12.8308C28.4172 12.7022 28.2711 12.6164 28.1084 12.5921C27.9457 12.5677 27.7797 12.607 27.6469 12.7011C26.3042 13.6481 25.1511 14.8242 24.2442 16.1715C23.9979 15.4713 23.9416 14.7216 24.0806 13.9943C24.2195 13.2669 24.5492 12.5864 25.0379 12.0177ZM19.129 7.65559C18.0604 6.25333 16.6532 5.12588 15.0303 4.37187C14.8828 4.30117 14.7125 4.29004 14.5566 4.34095C14.4007 4.39185 14.2721 4.5006 14.199 4.64329C14.126 4.78598 14.1145 4.9509 14.1671 5.10179C14.2197 5.25268 14.332 5.37716 14.4794 5.44786C15.9999 6.15108 17.3072 7.22199 18.2752 8.5571C16.3948 9.08298 14.6772 8.89153 13.3978 7.94156C11.9781 6.88737 10.9316 4.77415 10.894 1.20447C15.4409 1.28686 17.837 2.27319 18.8786 3.54791C19.7374 4.60209 19.7975 6.01736 19.129 7.65559ZM40.7317 19.9932L35.2384 31.8679C33.6585 33.573 31.55 34.7362 29.2293 35.1832C29.1296 35.2013 29.0323 35.2298 28.9388 35.268C25.1831 36.8214 23.3604 37.6041 21.2046 37.6041H21.1646C19.9352 37.6817 18.6608 37.4054 17.2611 36.9183C15.8615 36.4312 14.3993 35.7502 12.7819 35.0402C9.5745 33.6225 5.85637 32.1321 1.35455 32.1708C1.32189 32.171 1.29044 32.1589 1.26692 32.1369C1.25728 32.1288 1.2496 32.1187 1.24441 32.1074C1.23922 32.0961 1.23665 32.0839 1.23687 32.0715V26.0735C1.23478 26.064 1.23478 26.054 1.23687 26.0445C1.94521 25.3914 2.70628 24.7942 3.51282 24.2584C4.57693 23.5605 5.73619 23.0031 6.72519 22.9522C9.27439 22.8024 11.8174 23.3304 14.0788 24.4789C15.0503 24.9491 15.9041 25.4483 16.7629 25.9184C17.5667 26.3854 18.4226 26.7627 19.3143 27.0429C19.432 27.0772 19.5543 27.0944 19.6773 27.0938H28.5733C29.0551 27.325 29.4423 27.7066 29.6724 28.1771C29.748 28.3267 29.8076 28.4834 29.8502 28.6448C29.8652 28.7029 29.8753 28.7466 29.8803 28.7732C29.8815 28.7813 29.8815 28.7894 29.8803 28.7975C29.8803 28.8459 29.8803 28.9162 29.8602 29.0059C29.8286 29.2383 29.7706 29.4667 29.6875 29.6869C29.5951 29.9715 29.433 30.2303 29.2151 30.4413C28.9971 30.6523 28.7297 30.8092 28.4356 30.8986H18.0398C17.9668 30.899 17.8939 30.9055 17.822 30.9179L15.7313 31.233C15.649 31.2434 15.5696 31.2697 15.498 31.3104C15.4264 31.3511 15.3639 31.4054 15.3145 31.4699C15.265 31.5345 15.2294 31.608 15.2099 31.6862C15.1905 31.7643 15.1874 31.8455 15.2011 31.9248C15.2147 32.0041 15.2447 32.0799 15.2893 32.1478C15.3338 32.2156 15.3921 32.274 15.4605 32.3196C15.5289 32.3652 15.6061 32.397 15.6875 32.4131C15.7688 32.4291 15.8527 32.4292 15.9341 32.4132L18.0248 32.0788H28.4481C28.5735 32.0799 28.6985 32.0627 28.8187 32.0279C29.2922 31.8831 29.7237 31.632 30.0779 31.2951C30.4321 30.9582 30.699 30.5449 30.8567 30.0891C30.9761 29.7874 31.0601 29.4736 31.1071 29.1537C31.1071 29.0737 31.1272 29.0083 31.1322 28.9477C32.5543 27.1956 33.7136 25.6979 34.685 24.462C35.6866 23.1824 36.4903 22.1912 37.1888 21.4521C37.8874 20.7129 38.4733 20.267 39.0166 20.0392C39.5644 19.8143 40.1758 19.7801 40.7467 19.9423C40.7505 19.9588 40.7479 19.9761 40.7392 19.9908L40.7317 19.9932Z" fill="#FEFEFF"/>
          </svg>
        </div>
      </div>
    
      <div 
        onClick={handleLogoClick}
        style={dashboardIconStyle}>
        {/* Dashboard Image */}
        <svg width="73" height="47" viewBox="0 0 73 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.994 46V36.2H4.172C5.32 36.2 6.26267 36.4007 7 36.802C7.74667 37.2033 8.29733 37.7727 8.652 38.51C9.016 39.238 9.198 40.106 9.198 41.114C9.198 42.1127 9.016 42.9807 8.652 43.718C8.29733 44.446 7.74667 45.0107 7 45.412C6.26267 45.804 5.32 46 4.172 46H0.994ZM2.478 44.74H4.116C5.00267 44.74 5.70267 44.5953 6.216 44.306C6.73867 44.0167 7.112 43.6013 7.336 43.06C7.56933 42.5187 7.686 41.87 7.686 41.114C7.686 40.358 7.56933 39.7047 7.336 39.154C7.112 38.6033 6.73867 38.1833 6.216 37.894C5.70267 37.5953 5.00267 37.446 4.116 37.446H2.478V44.74ZM13.1338 46.168C12.5458 46.168 12.0604 46.07 11.6778 45.874C11.2951 45.678 11.0104 45.4213 10.8238 45.104C10.6371 44.7773 10.5438 44.4227 10.5438 44.04C10.5438 43.368 10.8051 42.836 11.3278 42.444C11.8504 42.052 12.5971 41.856 13.5678 41.856H15.3878V41.73C15.3878 41.1887 15.2384 40.7827 14.9398 40.512C14.6504 40.2413 14.2724 40.106 13.8058 40.106C13.3951 40.106 13.0358 40.2087 12.7278 40.414C12.4291 40.61 12.2471 40.904 12.1818 41.296H10.6978C10.7444 40.792 10.9124 40.3627 11.2018 40.008C11.5004 39.644 11.8738 39.3687 12.3218 39.182C12.7791 38.986 13.2784 38.888 13.8198 38.888C14.7904 38.888 15.5418 39.1447 16.0738 39.658C16.6058 40.162 16.8718 40.8527 16.8718 41.73V46H15.5838L15.4578 44.81C15.2618 45.1927 14.9771 45.5147 14.6038 45.776C14.2304 46.0373 13.7404 46.168 13.1338 46.168ZM13.4278 44.964C13.8291 44.964 14.1651 44.8707 14.4358 44.684C14.7158 44.488 14.9304 44.2313 15.0798 43.914C15.2384 43.5967 15.3364 43.2467 15.3738 42.864H13.7218C13.1338 42.864 12.7138 42.9667 12.4618 43.172C12.2191 43.3773 12.0978 43.634 12.0978 43.942C12.0978 44.2593 12.2144 44.5113 12.4478 44.698C12.6904 44.8753 13.0171 44.964 13.4278 44.964ZM21.3741 46.168C20.4967 46.168 19.7734 45.9533 19.2041 45.524C18.6347 45.0947 18.3081 44.5253 18.2241 43.816H19.7221C19.7967 44.1333 19.9741 44.4087 20.2541 44.642C20.5341 44.866 20.9027 44.978 21.3601 44.978C21.8081 44.978 22.1347 44.8847 22.3401 44.698C22.5454 44.5113 22.6481 44.2967 22.6481 44.054C22.6481 43.6993 22.5034 43.4613 22.2141 43.34C21.9341 43.2093 21.5421 43.0927 21.0381 42.99C20.6461 42.906 20.2541 42.794 19.8621 42.654C19.4794 42.514 19.1574 42.318 18.8961 42.066C18.6441 41.8047 18.5181 41.4547 18.5181 41.016C18.5181 40.4093 18.7514 39.9053 19.2181 39.504C19.6847 39.0933 20.3381 38.888 21.1781 38.888C21.9527 38.888 22.5781 39.0747 23.0541 39.448C23.5394 39.8213 23.8241 40.3487 23.9081 41.03H22.4801C22.4334 40.7313 22.2934 40.498 22.0601 40.33C21.8361 40.162 21.5327 40.078 21.1501 40.078C20.7767 40.078 20.4874 40.1573 20.2821 40.316C20.0767 40.4653 19.9741 40.6613 19.9741 40.904C19.9741 41.1467 20.1141 41.338 20.3941 41.478C20.6834 41.618 21.0614 41.744 21.5281 41.856C21.9947 41.9587 22.4241 42.08 22.8161 42.22C23.2174 42.3507 23.5394 42.5467 23.7821 42.808C24.0247 43.0693 24.1461 43.452 24.1461 43.956C24.1554 44.5907 23.9081 45.118 23.4041 45.538C22.9094 45.958 22.2327 46.168 21.3741 46.168ZM25.7661 46V35.92H27.2501V40.176C27.4835 39.7747 27.8055 39.462 28.2161 39.238C28.6361 39.0047 29.0981 38.888 29.6021 38.888C30.4328 38.888 31.0861 39.1493 31.5621 39.672C32.0381 40.1947 32.2761 40.974 32.2761 42.01V46H30.8061V42.164C30.8061 40.82 30.2695 40.148 29.1961 40.148C28.6361 40.148 28.1695 40.344 27.7961 40.736C27.4321 41.128 27.2501 41.688 27.2501 42.416V46H25.7661ZM37.9299 46.168C37.3886 46.168 36.9079 46.0607 36.4879 45.846C36.0773 45.6313 35.7506 45.328 35.5079 44.936L35.3539 46H34.0239V35.92H35.5079V40.134C35.7319 39.8073 36.0399 39.518 36.4319 39.266C36.8239 39.014 37.3279 38.888 37.9439 38.888C38.6159 38.888 39.2086 39.0467 39.7219 39.364C40.2353 39.6813 40.6366 40.1153 40.9259 40.666C41.2246 41.2167 41.3739 41.842 41.3739 42.542C41.3739 43.242 41.2246 43.8673 40.9259 44.418C40.6366 44.9593 40.2353 45.3887 39.7219 45.706C39.2086 46.014 38.6113 46.168 37.9299 46.168ZM37.6779 44.88C38.3126 44.88 38.8353 44.6653 39.2459 44.236C39.6566 43.7973 39.8619 43.228 39.8619 42.528C39.8619 42.0707 39.7686 41.6647 39.5819 41.31C39.3953 40.9553 39.1386 40.68 38.8119 40.484C38.4853 40.2787 38.1073 40.176 37.6779 40.176C37.0433 40.176 36.5206 40.3953 36.1099 40.834C35.7086 41.2727 35.5079 41.8373 35.5079 42.528C35.5079 43.228 35.7086 43.7973 36.1099 44.236C36.5206 44.6653 37.0433 44.88 37.6779 44.88ZM46.227 46.168C45.5643 46.168 44.967 46.0187 44.435 45.72C43.9123 45.412 43.497 44.9873 43.189 44.446C42.881 43.8953 42.727 43.256 42.727 42.528C42.727 41.8 42.881 41.1653 43.189 40.624C43.5063 40.0733 43.931 39.6487 44.463 39.35C44.995 39.042 45.5877 38.888 46.241 38.888C46.9037 38.888 47.4963 39.042 48.019 39.35C48.551 39.6487 48.971 40.0733 49.279 40.624C49.5963 41.1653 49.755 41.8 49.755 42.528C49.755 43.256 49.5963 43.8953 49.279 44.446C48.971 44.9873 48.551 45.412 48.019 45.72C47.487 46.0187 46.8897 46.168 46.227 46.168ZM46.227 44.894C46.5817 44.894 46.9083 44.8053 47.207 44.628C47.515 44.4507 47.7623 44.1893 47.949 43.844C48.1357 43.4893 48.229 43.0507 48.229 42.528C48.229 42.0053 48.1357 41.5713 47.949 41.226C47.7717 40.8713 47.529 40.6053 47.221 40.428C46.9223 40.2507 46.5957 40.162 46.241 40.162C45.8863 40.162 45.555 40.2507 45.247 40.428C44.9483 40.6053 44.7057 40.8713 44.519 41.226C44.3323 41.5713 44.239 42.0053 44.239 42.528C44.239 43.0507 44.3323 43.4893 44.519 43.844C44.7057 44.1893 44.9483 44.4507 45.247 44.628C45.5457 44.8053 45.8723 44.894 46.227 44.894ZM53.7119 46.168C53.1239 46.168 52.6385 46.07 52.2559 45.874C51.8732 45.678 51.5885 45.4213 51.4019 45.104C51.2152 44.7773 51.1219 44.4227 51.1219 44.04C51.1219 43.368 51.3832 42.836 51.9059 42.444C52.4285 42.052 53.1752 41.856 54.1459 41.856H55.9659V41.73C55.9659 41.1887 55.8165 40.7827 55.5179 40.512C55.2285 40.2413 54.8505 40.106 54.3839 40.106C53.9732 40.106 53.6139 40.2087 53.3059 40.414C53.0072 40.61 52.8252 40.904 52.7599 41.296H51.2759C51.3225 40.792 51.4905 40.3627 51.7799 40.008C52.0785 39.644 52.4519 39.3687 52.8999 39.182C53.3572 38.986 53.8565 38.888 54.3979 38.888C55.3685 38.888 56.1199 39.1447 56.6519 39.658C57.1839 40.162 57.4499 40.8527 57.4499 41.73V46H56.1619L56.0359 44.81C55.8399 45.1927 55.5552 45.5147 55.1819 45.776C54.8085 46.0373 54.3185 46.168 53.7119 46.168ZM54.0059 44.964C54.4072 44.964 54.7432 44.8707 55.0139 44.684C55.2939 44.488 55.5085 44.2313 55.6579 43.914C55.8165 43.5967 55.9145 43.2467 55.9519 42.864H54.2999C53.7119 42.864 53.2919 42.9667 53.0399 43.172C52.7972 43.3773 52.6759 43.634 52.6759 43.942C52.6759 44.2593 52.7925 44.5113 53.0259 44.698C53.2685 44.8753 53.5952 44.964 54.0059 44.964ZM59.1802 46V39.056H60.5102L60.6362 40.372C60.8789 39.9147 61.2149 39.5553 61.6442 39.294C62.0829 39.0233 62.6102 38.888 63.2262 38.888V40.442H62.8202C62.4095 40.442 62.0409 40.512 61.7142 40.652C61.3969 40.7827 61.1402 41.0113 60.9442 41.338C60.7575 41.6553 60.6642 42.0987 60.6642 42.668V46H59.1802ZM67.4711 46.168C66.7991 46.168 66.2065 46.0093 65.6931 45.692C65.1798 45.3747 64.7785 44.9407 64.4891 44.39C64.1998 43.8393 64.0551 43.214 64.0551 42.514C64.0551 41.814 64.1998 41.1933 64.4891 40.652C64.7785 40.1013 65.1798 39.672 65.6931 39.364C66.2158 39.0467 66.8131 38.888 67.4851 38.888C68.0358 38.888 68.5165 38.9953 68.9271 39.21C69.3471 39.4247 69.6738 39.728 69.9071 40.12V35.92H71.3911V46H70.0611L69.9071 44.922C69.6831 45.2487 69.3751 45.538 68.9831 45.79C68.5911 46.042 68.0871 46.168 67.4711 46.168ZM67.7371 44.88C68.3718 44.88 68.8898 44.6607 69.2911 44.222C69.7018 43.7833 69.9071 43.2187 69.9071 42.528C69.9071 41.828 69.7018 41.2633 69.2911 40.834C68.8898 40.3953 68.3718 40.176 67.7371 40.176C67.1025 40.176 66.5798 40.3953 66.1691 40.834C65.7585 41.2633 65.5531 41.828 65.5531 42.528C65.5531 42.9853 65.6465 43.3913 65.8331 43.746C66.0198 44.1007 66.2765 44.3807 66.6031 44.586C66.9391 44.782 67.3171 44.88 67.7371 44.88Z" fill="white"/>
        <path d="M22.1744 15.0978L35.7106 2.61678C36.5917 2.0684 37.0856 1.95534 37.9667 2.61678L51.2612 15.0978C53.3916 17.4027 51.185 18.0458 48.4412 18.162C47.2972 18.5539 49.9163 30.2637 46.1851 29.4472C46.1851 29.4472 41.8204 29.8593 40.9479 29.4472C40.0754 29.0351 41.4737 20.8552 39.0947 21.0019C36.7157 21.1487 36.7793 20.8707 33.938 21.0019C31.0967 21.1332 33.9141 29.0452 32.1654 29.4472H27.2505C24.5181 30.1639 25.2654 24.5592 25.2361 18.162C21.7697 18.1223 20.2148 17.647 22.1744 15.0978Z" stroke="white" stroke-width="3.5"/>
        </svg>
      </div>

      <div
        style={profileIconStyle}>
        {/* Notifications Image */}
        <svg width="85" height="49" viewBox="0 0 85 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2278 23.8613L34.9875 22.0985C35.5512 21.5348 35.8614 20.7862 35.8614 19.9898V13.0148C35.8614 10.9911 36.7413 9.05686 38.2774 7.71168C39.8254 6.35457 41.7969 5.75803 43.8505 6.02796C47.3208 6.48879 49.9381 9.62654 49.9381 13.328V19.9898C49.9381 20.7862 50.2483 21.5348 50.8105 22.097L52.5718 23.8613H33.2278ZM45.8817 27.3525C45.8817 28.6932 44.5156 29.8266 42.899 29.8266C41.2824 29.8266 39.9164 28.6932 39.9164 27.3525V26.8439H45.8817V27.3525ZM55.6066 22.6802L52.9208 19.9898V13.328C52.9208 8.1367 49.1895 3.72684 44.2412 3.07215C41.3749 2.69037 38.4817 3.56578 36.3118 5.46872C34.1285 7.3806 32.8788 10.1306 32.8788 13.0148L32.8773 19.9898L30.1914 22.6802C29.492 23.3811 29.2847 24.4235 29.6635 25.3377C30.0438 26.2534 30.9281 26.8439 31.9184 26.8439H36.9337V27.3525C36.9337 30.362 39.6092 32.8093 42.899 32.8093C46.1889 32.8093 48.8643 30.362 48.8643 27.3525V26.8439H53.8797C54.8699 26.8439 55.7528 26.2534 56.1316 25.3392C56.5119 24.4235 56.3061 23.3796 55.6066 22.6802Z" fill="#FEFEFF"/>
        <path d="M0.994 48V38.2H2.478L7.392 45.578V38.2H8.876V48H7.392L2.478 40.622V48H0.994ZM14.0571 48.168C13.3944 48.168 12.7971 48.0187 12.2651 47.72C11.7424 47.412 11.3271 46.9873 11.0191 46.446C10.7111 45.8953 10.5571 45.256 10.5571 44.528C10.5571 43.8 10.7111 43.1653 11.0191 42.624C11.3364 42.0733 11.7611 41.6487 12.2931 41.35C12.8251 41.042 13.4178 40.888 14.0711 40.888C14.7338 40.888 15.3264 41.042 15.8491 41.35C16.3811 41.6487 16.8011 42.0733 17.1091 42.624C17.4264 43.1653 17.5851 43.8 17.5851 44.528C17.5851 45.256 17.4264 45.8953 17.1091 46.446C16.8011 46.9873 16.3811 47.412 15.8491 47.72C15.3171 48.0187 14.7198 48.168 14.0571 48.168ZM14.0571 46.894C14.4118 46.894 14.7384 46.8053 15.0371 46.628C15.3451 46.4507 15.5924 46.1893 15.7791 45.844C15.9658 45.4893 16.0591 45.0507 16.0591 44.528C16.0591 44.0053 15.9658 43.5713 15.7791 43.226C15.6018 42.8713 15.3591 42.6053 15.0511 42.428C14.7524 42.2507 14.4258 42.162 14.0711 42.162C13.7164 42.162 13.3851 42.2507 13.0771 42.428C12.7784 42.6053 12.5358 42.8713 12.3491 43.226C12.1624 43.5713 12.0691 44.0053 12.0691 44.528C12.0691 45.0507 12.1624 45.4893 12.3491 45.844C12.5358 46.1893 12.7784 46.4507 13.0771 46.628C13.3758 46.8053 13.7024 46.894 14.0571 46.894ZM21.8285 48C21.1472 48 20.6058 47.8367 20.2045 47.51C19.8032 47.174 19.6025 46.5813 19.6025 45.732V42.302H18.4125V41.056H19.6025L19.7845 39.292H21.0865V41.056H23.0465V42.302H21.0865V45.732C21.0865 46.1147 21.1658 46.3807 21.3245 46.53C21.4925 46.67 21.7772 46.74 22.1785 46.74H22.9765V48H21.8285ZM25.4167 39.74C25.1367 39.74 24.9033 39.656 24.7167 39.488C24.5393 39.3107 24.4507 39.0913 24.4507 38.83C24.4507 38.5687 24.5393 38.354 24.7167 38.186C24.9033 38.0087 25.1367 37.92 25.4167 37.92C25.6967 37.92 25.9253 38.0087 26.1027 38.186C26.2893 38.354 26.3827 38.5687 26.3827 38.83C26.3827 39.0913 26.2893 39.3107 26.1027 39.488C25.9253 39.656 25.6967 39.74 25.4167 39.74ZM24.6747 48V41.056H26.1587V48H24.6747ZM28.4677 48V42.302H27.4737V41.056H28.4677V40.048C28.4677 39.292 28.6544 38.7507 29.0277 38.424C29.4104 38.088 29.947 37.92 30.6377 37.92H31.3657V39.18H30.8617C30.535 39.18 30.3017 39.25 30.1617 39.39C30.0217 39.5207 29.9517 39.7447 29.9517 40.062V41.056H34.3477V48H32.8637V42.302H29.9517V48H28.4677ZM33.6197 39.894C33.3397 39.894 33.1064 39.81 32.9197 39.642C32.7424 39.4647 32.6537 39.2407 32.6537 38.97C32.6537 38.7087 32.7424 38.494 32.9197 38.326C33.1064 38.158 33.3397 38.074 33.6197 38.074C33.8997 38.074 34.1284 38.158 34.3057 38.326C34.4924 38.494 34.5857 38.7087 34.5857 38.97C34.5857 39.2407 34.4924 39.4647 34.3057 39.642C34.1284 39.81 33.8997 39.894 33.6197 39.894ZM39.6108 48.168C38.9295 48.168 38.3181 48.014 37.7768 47.706C37.2448 47.398 36.8248 46.9733 36.5168 46.432C36.2181 45.8813 36.0688 45.2467 36.0688 44.528C36.0688 43.8093 36.2181 43.1793 36.5168 42.638C36.8248 42.0873 37.2448 41.658 37.7768 41.35C38.3181 41.042 38.9295 40.888 39.6108 40.888C40.4695 40.888 41.1881 41.112 41.7668 41.56C42.3548 42.008 42.7328 42.6147 42.9008 43.38H41.3468C41.2535 42.9973 41.0481 42.6987 40.7308 42.484C40.4135 42.2693 40.0401 42.162 39.6108 42.162C39.2468 42.162 38.9108 42.2553 38.6028 42.442C38.2948 42.6193 38.0475 42.8853 37.8608 43.24C37.6741 43.5853 37.5808 44.0147 37.5808 44.528C37.5808 45.0413 37.6741 45.4753 37.8608 45.83C38.0475 46.1753 38.2948 46.4413 38.6028 46.628C38.9108 46.8147 39.2468 46.908 39.6108 46.908C40.0401 46.908 40.4135 46.8007 40.7308 46.586C41.0481 46.3713 41.2535 46.068 41.3468 45.676H42.9008C42.7421 46.4227 42.3688 47.0247 41.7808 47.482C41.1928 47.9393 40.4695 48.168 39.6108 48.168ZM46.8623 48.168C46.2743 48.168 45.7889 48.07 45.4063 47.874C45.0236 47.678 44.7389 47.4213 44.5523 47.104C44.3656 46.7773 44.2723 46.4227 44.2723 46.04C44.2723 45.368 44.5336 44.836 45.0563 44.444C45.5789 44.052 46.3256 43.856 47.2963 43.856H49.1163V43.73C49.1163 43.1887 48.9669 42.7827 48.6683 42.512C48.3789 42.2413 48.0009 42.106 47.5343 42.106C47.1236 42.106 46.7643 42.2087 46.4563 42.414C46.1576 42.61 45.9756 42.904 45.9103 43.296H44.4263C44.4729 42.792 44.6409 42.3627 44.9303 42.008C45.2289 41.644 45.6023 41.3687 46.0503 41.182C46.5076 40.986 47.0069 40.888 47.5483 40.888C48.5189 40.888 49.2703 41.1447 49.8023 41.658C50.3343 42.162 50.6003 42.8527 50.6003 43.73V48H49.3123L49.1863 46.81C48.9903 47.1927 48.7056 47.5147 48.3323 47.776C47.9589 48.0373 47.4689 48.168 46.8623 48.168ZM47.1563 46.964C47.5576 46.964 47.8936 46.8707 48.1643 46.684C48.4443 46.488 48.6589 46.2313 48.8083 45.914C48.9669 45.5967 49.0649 45.2467 49.1023 44.864H47.4503C46.8623 44.864 46.4423 44.9667 46.1903 45.172C45.9476 45.3773 45.8263 45.634 45.8263 45.942C45.8263 46.2593 45.9429 46.5113 46.1763 46.698C46.4189 46.8753 46.7456 46.964 47.1563 46.964ZM55.1059 48C54.4245 48 53.8832 47.8367 53.4819 47.51C53.0805 47.174 52.8799 46.5813 52.8799 45.732V42.302H51.6899V41.056H52.8799L53.0619 39.292H54.3639V41.056H56.3239V42.302H54.3639V45.732C54.3639 46.1147 54.4432 46.3807 54.6019 46.53C54.7699 46.67 55.0545 46.74 55.4559 46.74H56.2539V48H55.1059ZM58.694 39.74C58.414 39.74 58.1807 39.656 57.994 39.488C57.8167 39.3107 57.728 39.0913 57.728 38.83C57.728 38.5687 57.8167 38.354 57.994 38.186C58.1807 38.0087 58.414 37.92 58.694 37.92C58.974 37.92 59.2027 38.0087 59.38 38.186C59.5667 38.354 59.66 38.5687 59.66 38.83C59.66 39.0913 59.5667 39.3107 59.38 39.488C59.2027 39.656 58.974 39.74 58.694 39.74ZM57.952 48V41.056H59.436V48H57.952ZM64.643 48.168C63.9804 48.168 63.383 48.0187 62.851 47.72C62.3284 47.412 61.913 46.9873 61.605 46.446C61.297 45.8953 61.143 45.256 61.143 44.528C61.143 43.8 61.297 43.1653 61.605 42.624C61.9224 42.0733 62.347 41.6487 62.879 41.35C63.411 41.042 64.0037 40.888 64.657 40.888C65.3197 40.888 65.9124 41.042 66.435 41.35C66.967 41.6487 67.387 42.0733 67.695 42.624C68.0124 43.1653 68.171 43.8 68.171 44.528C68.171 45.256 68.0124 45.8953 67.695 46.446C67.387 46.9873 66.967 47.412 66.435 47.72C65.903 48.0187 65.3057 48.168 64.643 48.168ZM64.643 46.894C64.9977 46.894 65.3244 46.8053 65.623 46.628C65.931 46.4507 66.1784 46.1893 66.365 45.844C66.5517 45.4893 66.645 45.0507 66.645 44.528C66.645 44.0053 66.5517 43.5713 66.365 43.226C66.1877 42.8713 65.945 42.6053 65.637 42.428C65.3384 42.2507 65.0117 42.162 64.657 42.162C64.3024 42.162 63.971 42.2507 63.663 42.428C63.3644 42.6053 63.1217 42.8713 62.935 43.226C62.7484 43.5713 62.655 44.0053 62.655 44.528C62.655 45.0507 62.7484 45.4893 62.935 45.844C63.1217 46.1893 63.3644 46.4507 63.663 46.628C63.9617 46.8053 64.2884 46.894 64.643 46.894ZM69.7759 48V41.056H71.0919L71.2039 42.274C71.4186 41.8447 71.7312 41.5087 72.1419 41.266C72.5619 41.014 73.0426 40.888 73.5839 40.888C74.4239 40.888 75.0819 41.1493 75.5579 41.672C76.0432 42.1947 76.2859 42.974 76.2859 44.01V48H74.8159V44.164C74.8159 42.82 74.2652 42.148 73.1639 42.148C72.6132 42.148 72.1559 42.344 71.7919 42.736C71.4372 43.128 71.2599 43.688 71.2599 44.416V48H69.7759ZM80.8057 48.168C79.9284 48.168 79.205 47.9533 78.6357 47.524C78.0664 47.0947 77.7397 46.5253 77.6557 45.816H79.1537C79.2284 46.1333 79.4057 46.4087 79.6857 46.642C79.9657 46.866 80.3344 46.978 80.7917 46.978C81.2397 46.978 81.5664 46.8847 81.7717 46.698C81.977 46.5113 82.0797 46.2967 82.0797 46.054C82.0797 45.6993 81.935 45.4613 81.6457 45.34C81.3657 45.2093 80.9737 45.0927 80.4697 44.99C80.0777 44.906 79.6857 44.794 79.2937 44.654C78.911 44.514 78.589 44.318 78.3277 44.066C78.0757 43.8047 77.9497 43.4547 77.9497 43.016C77.9497 42.4093 78.183 41.9053 78.6497 41.504C79.1164 41.0933 79.7697 40.888 80.6097 40.888C81.3844 40.888 82.0097 41.0747 82.4857 41.448C82.971 41.8213 83.2557 42.3487 83.3397 43.03H81.9117C81.865 42.7313 81.725 42.498 81.4917 42.33C81.2677 42.162 80.9644 42.078 80.5817 42.078C80.2084 42.078 79.919 42.1573 79.7137 42.316C79.5084 42.4653 79.4057 42.6613 79.4057 42.904C79.4057 43.1467 79.5457 43.338 79.8257 43.478C80.115 43.618 80.493 43.744 80.9597 43.856C81.4264 43.9587 81.8557 44.08 82.2477 44.22C82.649 44.3507 82.971 44.5467 83.2137 44.808C83.4564 45.0693 83.5777 45.452 83.5777 45.956C83.587 46.5907 83.3397 47.118 82.8357 47.538C82.341 47.958 81.6644 48.168 80.8057 48.168Z" fill="white"/>
        </svg>
      </div>

      <div
        onClick={handleProfileClick}
        style={profileIconStyle}>
        {/* Profile Image */}
        <svg width="43" height="49" viewBox="0 0 43 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6941 10.3712C26.6941 12.8777 24.6556 14.9162 22.149 14.9162C19.6425 14.9162 17.604 12.8777 17.604 10.3712C17.604 7.86461 19.6425 5.82617 22.149 5.82617C24.6556 5.82617 26.6941 7.86461 26.6941 10.3712ZM30.1028 25.1424C30.1028 25.7696 29.5949 26.2787 28.9666 26.2787H15.3316C14.7032 26.2787 14.1953 25.7696 14.1953 25.1424C14.1953 20.7565 17.7643 17.1887 22.1491 17.1887C26.5339 17.1887 30.1028 20.7565 30.1028 25.1424Z" fill="#FEFEFF"/>
        <path d="M0.994 48V38.2H4.424C5.18933 38.2 5.824 38.3307 6.328 38.592C6.832 38.844 7.20533 39.194 7.448 39.642C7.7 40.0807 7.826 40.58 7.826 41.14C7.826 41.672 7.70467 42.162 7.462 42.61C7.22867 43.0487 6.86 43.3987 6.356 43.66C5.852 43.9213 5.208 44.052 4.424 44.052H2.478V48H0.994ZM2.478 42.834H4.354C5.054 42.834 5.55333 42.6847 5.852 42.386C6.16 42.078 6.314 41.6627 6.314 41.14C6.314 40.5987 6.16 40.1787 5.852 39.88C5.55333 39.572 5.054 39.418 4.354 39.418H2.478V42.834ZM9.23683 48V41.056H10.5668L10.6928 42.372C10.9355 41.9147 11.2715 41.5553 11.7008 41.294C12.1395 41.0233 12.6668 40.888 13.2828 40.888V42.442H12.8768C12.4662 42.442 12.0975 42.512 11.7708 42.652C11.4535 42.7827 11.1968 43.0113 11.0008 43.338C10.8142 43.6553 10.7208 44.0987 10.7208 44.668V48H9.23683ZM17.6118 48.168C16.9491 48.168 16.3518 48.0187 15.8198 47.72C15.2971 47.412 14.8818 46.9873 14.5738 46.446C14.2658 45.8953 14.1118 45.256 14.1118 44.528C14.1118 43.8 14.2658 43.1653 14.5738 42.624C14.8911 42.0733 15.3158 41.6487 15.8478 41.35C16.3798 41.042 16.9724 40.888 17.6258 40.888C18.2884 40.888 18.8811 41.042 19.4038 41.35C19.9358 41.6487 20.3558 42.0733 20.6638 42.624C20.9811 43.1653 21.1398 43.8 21.1398 44.528C21.1398 45.256 20.9811 45.8953 20.6638 46.446C20.3558 46.9873 19.9358 47.412 19.4038 47.72C18.8718 48.0187 18.2744 48.168 17.6118 48.168ZM17.6118 46.894C17.9664 46.894 18.2931 46.8053 18.5918 46.628C18.8998 46.4507 19.1471 46.1893 19.3338 45.844C19.5204 45.4893 19.6138 45.0507 19.6138 44.528C19.6138 44.0053 19.5204 43.5713 19.3338 43.226C19.1564 42.8713 18.9138 42.6053 18.6058 42.428C18.3071 42.2507 17.9804 42.162 17.6258 42.162C17.2711 42.162 16.9398 42.2507 16.6318 42.428C16.3331 42.6053 16.0904 42.8713 15.9038 43.226C15.7171 43.5713 15.6238 44.0053 15.6238 44.528C15.6238 45.0507 15.7171 45.4893 15.9038 45.844C16.0904 46.1893 16.3331 46.4507 16.6318 46.628C16.9304 46.8053 17.2571 46.894 17.6118 46.894ZM23.0946 48V42.302H22.1006V41.056H23.0946V40.048C23.0946 39.292 23.2813 38.7507 23.6546 38.424C24.0373 38.088 24.574 37.92 25.2646 37.92H25.9926V39.18H25.4886C25.162 39.18 24.9286 39.25 24.7886 39.39C24.6486 39.5207 24.5786 39.7447 24.5786 40.062V41.056H28.9746V48H27.4906V42.302H24.5786V48H23.0946ZM28.2466 39.894C27.9666 39.894 27.7333 39.81 27.5466 39.642C27.3693 39.4647 27.2806 39.2407 27.2806 38.97C27.2806 38.7087 27.3693 38.494 27.5466 38.326C27.7333 38.158 27.9666 38.074 28.2466 38.074C28.5266 38.074 28.7553 38.158 28.9326 38.326C29.1193 38.494 29.2126 38.7087 29.2126 38.97C29.2126 39.2407 29.1193 39.4647 28.9326 39.642C28.7553 39.81 28.5266 39.894 28.2466 39.894ZM30.9478 48V37.92H32.4318V48H30.9478ZM37.559 48.168C36.8777 48.168 36.271 48.0187 35.739 47.72C35.2164 47.412 34.8057 46.9873 34.507 46.446C34.2084 45.9047 34.059 45.2747 34.059 44.556C34.059 43.828 34.2037 43.1887 34.493 42.638C34.7917 42.0873 35.2024 41.658 35.725 41.35C36.257 41.042 36.873 40.888 37.573 40.888C38.2544 40.888 38.847 41.042 39.351 41.35C39.855 41.6487 40.247 42.05 40.527 42.554C40.807 43.058 40.947 43.6133 40.947 44.22C40.947 44.3133 40.9424 44.416 40.933 44.528C40.933 44.6307 40.9284 44.7473 40.919 44.878H35.515C35.5617 45.55 35.781 46.0633 36.173 46.418C36.5744 46.7633 37.0364 46.936 37.559 46.936C37.979 46.936 38.329 46.8427 38.609 46.656C38.8984 46.46 39.113 46.1987 39.253 45.872H40.737C40.5504 46.5253 40.177 47.0713 39.617 47.51C39.0664 47.9487 38.3804 48.168 37.559 48.168ZM37.559 42.106C37.0644 42.106 36.6257 42.2553 36.243 42.554C35.8604 42.8433 35.627 43.282 35.543 43.87H39.463C39.435 43.3287 39.2437 42.8993 38.889 42.582C38.5344 42.2647 38.091 42.106 37.559 42.106Z" fill="white"/>
        <circle cx="22.1023" cy="16.2312" r="15.2312" stroke="#FEFEFF" stroke-width="2"/>
        </svg>
      </div>    
    </Toolbar>
  );
};
const buttonStyle: React.CSSProperties = {
  width: '70px',
  height: '40px',
  fontSize: '12px',
}

const logoContainerStyle: React.CSSProperties = {
  marginLeft: "0%",
  height: "100",
  alignItems: "center",
  flexDirection: 'row'
}

const logoStyle: React.CSSProperties = {
  alignItems: "center",
  height: "100",
  marginTop: "6%"
}
    
const dashboardIconStyle: React.CSSProperties = {
  marginLeft: "60%",
  height: "100",
  alignItems: "center"
}

const profileIconStyle: React.CSSProperties = {
  marginLeft: "3%",
  height: "100",
  alignItems: "center"
}


export default NavBar;
