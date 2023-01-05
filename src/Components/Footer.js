import React from 'react'
import HeaderListItems from './HeaderListItems'
import Buttons from './Buttons'

function Footer() {
  return (
    <div className='footer'>
      <div className='footerDescription'>
        <div className='svgWrapper'>
          <svg width="70" height="26" viewBox="0 0 70 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4611 20.4072C14.4611 20.9842 14.7233 21.2727 15.2477 21.2727C15.7923 21.2727 16.2461 21.1618 16.6091 20.9398L16.4579 24.7017C15.4897 25.5672 14.4006 26 13.1905 26C10.9114 26 9.67101 25.0346 9.46932 23.1037C8.25918 25.0346 6.6255 26 4.56826 26C2.5312 26 1.21014 25.4895 0.605068 24.4686C0.201689 23.825 0 23.0926 0 22.2714C0 21.4503 0.0605068 20.6957 0.18152 20.0077L1.87571 9.52113H7.01879L5.59688 18.3764C5.53637 18.7759 5.50612 19.1754 5.50612 19.5749C5.50612 20.6402 6.05068 21.1729 7.1398 21.1729C8.04741 21.1729 8.77349 20.8289 9.31805 20.1408L11.0425 9.52113H16.1856L14.4914 20.0077C14.4712 20.1408 14.4611 20.274 14.4611 20.4072Z" fill="#381DDB"/>
            <path d="M32.6808 20.4072C32.6808 20.9842 32.943 21.2727 33.4674 21.2727C34.0119 21.2727 34.4657 21.1618 34.8288 20.9398L34.6775 24.7017C33.7094 25.5672 32.6203 26 31.4101 26C29.1915 26 27.9612 25.1122 27.7192 23.3367C26.7108 25.1122 25.2283 26 23.272 26C19.9643 26 18.3104 24.4353 18.3104 21.306C18.3104 20.7734 18.3608 20.1852 18.4617 19.5416L19.097 15.6466C19.4197 13.6492 20.1559 12.0623 21.3055 10.886C22.4753 9.68758 24.0888 9.08835 26.146 9.08835C27.4167 9.08835 28.4251 9.38796 29.1714 9.9872L30.7143 0.266324H35.8876L32.711 20.0077C32.6909 20.1408 32.6808 20.274 32.6808 20.4072ZM23.7258 18.8092C23.6854 19.009 23.6653 19.2864 23.6653 19.6415C23.6653 19.9966 23.8165 20.3517 24.1191 20.7068C24.4216 21.0397 24.9258 21.2061 25.6317 21.2061C26.3578 21.2061 26.983 20.8954 27.5074 20.274L28.415 14.6812C28.1932 14.1263 27.6688 13.8489 26.8419 13.8489C25.2889 13.8489 24.3813 14.6701 24.1191 16.3124L23.7258 18.8092Z" fill="#381DDB"/>
            <path d="M43.6656 21.2727C44.1295 21.2727 44.5429 21.1618 44.906 20.9398L44.7547 24.7017C43.8068 25.5672 42.7277 26 41.5176 26C39.6822 26 38.4923 25.5339 37.9477 24.6018C37.5847 23.9804 37.4031 23.3257 37.4031 22.6376C37.4031 21.9274 37.4435 21.306 37.5242 20.7734L39.3394 9.52113H44.4824L42.7882 20.0077C42.7681 20.1408 42.758 20.2629 42.758 20.3739C42.758 20.9731 43.0605 21.2727 43.6656 21.2727ZM39.9444 4.09475C39.9444 2.67435 40.2268 1.64234 40.7915 0.998719C41.3764 0.332906 42.2739 0 43.4841 0C45.1783 0 46.0254 0.82117 46.0254 2.46351C46.0254 3.86172 45.7329 4.88263 45.148 5.52625C44.5833 6.16987 43.6858 6.49168 42.4555 6.49168C40.7814 6.49168 39.9444 5.6927 39.9444 4.09475Z" fill="#381DDB"/>
            <path d="M61.8926 25.5339H56.2654L54.1174 20.9065L50.487 25.5339H44.8599L51.3946 17.3444L47.4617 9.28809H53.1796L55.2368 13.8489L58.7765 9.28809H64.4944L57.9294 17.3777L61.8926 25.5339Z" fill="#381DDB"/>
            <path d="M63.9191 23.6031C63.9191 22.1827 64.2014 21.1507 64.7662 20.507C65.3309 19.8412 66.2284 19.5083 67.4587 19.5083C69.1529 19.5083 70 20.3295 70 21.9718C70 23.37 69.7076 24.391 69.1227 25.0346C68.5579 25.6782 67.6604 26 66.4301 26C64.7561 26 63.9191 25.201 63.9191 23.6031Z" fill="#381DDB"/>
          </svg>
        </div>
        <p>
          udix is a market-leading provider of digital marketing services, 
          using proprietary tools and methodologies to generate high-value 
          engagement for our customers.
        </p>
      </div>
      <div className='contactSection'>
        <div className='footerListing'>
        <HeaderListItems/>
        <Buttons/>
        </div>
      <div className='socialMediaIcons'>
        <ul>
          <li>
            <a href='#' className='svgWrapper'>
              <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.73042 9.52808H6.29004C6.29004 13.427 6.29004 18.2262 6.29004 18.2262H2.67387C2.67387 18.2262 2.67387 13.4735 2.67387 9.52808H0.954903V6.45388H2.67387V4.46544C2.67387 3.04133 3.35058 0.81604 6.32327 0.81604L9.00292 0.826312V3.81048C9.00292 3.81048 7.37458 3.81048 7.05798 3.81048C6.74138 3.81048 6.29124 3.96878 6.29124 4.64791V6.45448H9.04642L8.73042 9.52808Z" fill="#222222"/>
              </svg>
            </a>
          </li>
          <li>
            <a href='#' className='svgWrapper'>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6878 2.01587H10.6686V6.47644C10.6686 6.87449 10.7026 7.14426 10.7591 7.31521C10.8616 7.60063 11.0887 7.73413 11.4177 7.73413C11.7906 7.73413 12.1785 7.50795 12.5855 7.04145V7.65649H13.6075V2.01587H12.5855V6.32728C12.3587 6.64738 12.1442 6.80575 11.9398 6.80575C11.8029 6.80575 11.7225 6.72472 11.7001 6.56636C11.6878 6.53291 11.6878 6.40863 11.6878 6.16897V6.16892V2.01587ZM7.1281 2.52626C6.91081 2.81137 6.80831 3.25209 6.80831 3.85516V5.8304C6.80831 6.42979 6.91081 6.8748 7.1281 7.15685C7.41076 7.5417 7.80882 7.73413 8.31828 7.73413C8.8302 7.73413 9.22795 7.5417 9.51061 7.15685C9.72483 6.8748 9.82733 6.43009 9.82733 5.8304V3.85516C9.82733 3.25209 9.72483 2.81107 9.51061 2.52626C9.22795 2.14048 8.8302 1.94774 8.31828 1.94774C7.80882 1.94774 7.41076 2.14048 7.1281 2.52626ZM4.87971 3.05966L4.07501 0.0872803H2.88268C3.0007 0.434202 3.12119 0.781798 3.24171 1.12948L3.24171 1.12948C3.36502 1.48522 3.48837 1.84105 3.60912 2.19633C3.97281 3.25209 4.19961 4.04789 4.30242 4.59112V7.65679H5.43552V4.59112L6.7991 0.0872803H5.65281L4.87971 3.05966ZM15.2663 19.681C16.1425 19.5831 16.8702 18.9264 17.0752 18.0366C17.3671 16.7694 17.3683 15.3856 17.3683 14.0806V14.0562C17.3683 12.7584 17.3683 11.3842 17.0792 10.1246C16.8739 9.23459 16.1459 8.57812 15.2697 8.48022C13.1944 8.24851 11.0939 8.24728 9.00299 8.24851C6.91143 8.24728 4.81097 8.24851 2.73567 8.48022C1.85946 8.57782 1.13209 9.23459 0.927384 10.1246C0.635824 11.3921 0.632141 12.7757 0.632141 14.0806C0.632141 15.3856 0.632141 16.7694 0.924008 18.0366C1.12841 18.9267 1.85639 19.5831 2.7326 19.681C4.80759 19.9128 6.90836 19.914 8.9993 19.9128C11.0912 19.914 13.1907 19.9128 15.2663 19.681ZM13.4036 12.466C13.6957 12.0839 14.0975 11.8939 14.6149 11.8939C15.1225 11.8939 15.5249 12.0842 15.8075 12.4654C16.0196 12.7477 16.1206 13.1842 16.1206 13.7805V14.9366H14.0975V15.9267C14.0975 16.4429 14.2675 16.7007 14.6149 16.7007C14.8638 16.7007 15.0093 16.5656 15.067 16.2952C15.0759 16.2403 15.0891 16.0154 15.0891 15.6102H16.1206V15.7572C16.1206 16.0835 16.1086 16.3078 16.0991 16.4091C16.0653 16.6332 15.9856 16.836 15.8628 17.0153C15.5829 17.4207 15.1683 17.6205 14.6401 17.6205C14.111 17.6205 13.708 17.4299 13.4161 17.0487C13.2007 16.7691 13.0911 16.3296 13.0911 15.7364V13.7811C13.0911 13.1848 13.189 12.7483 13.4036 12.466ZM14.0981 14.095H15.1096V13.5785C15.1096 13.0626 14.9402 12.8042 14.6057 12.8042C14.2678 12.8042 14.0981 13.0623 14.0981 13.5785V14.095ZM7.45026 16.2277C7.22592 16.5448 7.01385 16.701 6.81067 16.701C6.67564 16.701 6.5986 16.6215 6.57405 16.4643C6.56484 16.4318 6.56484 16.3084 6.56484 16.0715V11.962H5.55328V16.375C5.55328 16.7694 5.58735 17.0358 5.64259 17.2052C5.74418 17.4882 5.96883 17.6208 6.29415 17.6208C6.66643 17.6208 7.04822 17.3961 7.45026 16.9351V17.544H8.46244V11.962H7.45026V16.2277ZM10.3485 12.4993C10.6747 12.0972 11.0218 11.894 11.3938 11.894C11.7958 11.894 12.0671 12.1058 12.2019 12.5244C12.2697 12.7488 12.3044 13.1177 12.3044 13.6462V15.8688C12.3044 16.3853 12.2697 16.757 12.2019 16.9936C12.0668 17.4091 11.7961 17.6209 11.3938 17.6209C11.0338 17.6209 10.687 17.4208 10.3485 17.0031V17.5439H9.33722V10.0526H10.3485V12.4993ZM10.8524 16.7011C11.1446 16.7011 11.2925 16.4525 11.2925 15.948V13.5658C11.2925 13.0624 11.1443 12.804 10.8524 12.804C10.6864 12.804 10.5173 12.8832 10.3482 13.0505V16.4522C10.5173 16.6216 10.6864 16.7011 10.8524 16.7011ZM1.88019 11.1068H3.06945V17.5436H4.19456V11.1068H5.40591V10.0526H1.88019V11.1068ZM8.80597 6.02248C8.80597 6.54422 8.64792 6.80539 8.31861 6.80539C7.98899 6.80539 7.83063 6.54453 7.83063 6.02248V3.64979C7.83063 3.12805 7.98899 2.8678 8.31861 2.8678C8.64792 2.8678 8.80597 3.12775 8.80597 3.64979V6.02248Z" fill="#222222"/>
              </svg>
            </a>
          </li>
          <li>
            <a href='#' className='svgWrapper'>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.25 18.2656H0.5V5.14061H4.25V18.2656ZM2.49123 4.33626C1.51998 4.33626 0.734379 3.54875 0.734379 2.57749C0.734379 1.60624 1.52189 0.818726 2.49123 0.818726C3.46249 0.820576 4.25 1.60809 4.25 2.57749C4.25 3.54875 3.46249 4.33626 2.49123 4.33626ZM17.375 18.2656H13.625V10.1506C13.625 9.19999 13.3531 8.53442 12.185 8.53442C10.2481 8.53442 9.87497 10.1506 9.87497 10.1506V18.2656H6.12497V5.14061H9.87497V6.39497C10.4112 5.98437 11.7499 5.14246 13.625 5.14246C14.84 5.14246 17.375 5.86996 17.375 10.2649V18.2656Z" fill="#222222"/>
              </svg>
            </a>
          </li>
          <li>
            <a href='#' className='svgWrapper'>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.27087 15.3042C6.70413 15.4679 6.09086 15.5507 5.44738 15.5507C4.73079 15.5507 4.042 15.4685 3.39973 15.306C2.15688 14.9924 1.23848 14.3979 0.809499 13.6318C0.624612 13.3007 0.53096 12.9478 0.53096 12.5823C0.53096 12.2058 0.620986 11.824 0.798623 11.4457C1.47956 9.99445 3.27466 9.01805 5.2631 9.01805H5.31989C5.15857 8.73347 5.08063 8.43862 5.08063 8.12866C5.08063 7.97459 5.10117 7.8175 5.14225 7.65738C3.05654 7.61025 1.49588 6.08282 1.49588 4.06901C1.49588 2.64731 2.63239 1.26187 4.2577 0.702375C4.74408 0.534406 5.24014 0.448608 5.72773 0.448608H10.188C10.3396 0.448608 10.4744 0.547094 10.5215 0.691499C10.5686 0.835299 10.5167 0.993602 10.394 1.08242L9.39646 1.80444C9.33665 1.84674 9.26475 1.8697 9.19043 1.8697H8.83334C9.29435 2.42255 9.56443 3.21103 9.56443 4.0962C9.56443 5.0732 9.07019 5.99703 8.17053 6.70092C7.4757 7.24229 7.44851 7.39153 7.44851 7.70028C7.45697 7.87006 7.94093 8.42412 8.47505 8.80175C9.71911 9.68147 10.1819 10.5449 10.1819 11.9853C10.1813 13.4904 9.03878 14.7906 7.27087 15.3042ZM17.3436 7.65376C17.3436 7.8471 17.1859 8.0042 16.9931 8.0042H14.4585V10.54C14.4585 10.7334 14.3008 10.8905 14.1093 10.8905H13.3872C13.1927 10.8905 13.0356 10.7334 13.0356 10.54V8.0042H10.5028C10.3094 8.0042 10.1523 7.84831 10.1523 7.65376V6.93294C10.1523 6.73959 10.3094 6.58129 10.5028 6.58129H13.0356V4.04786C13.0356 3.85391 13.1927 3.69742 13.3872 3.69742H14.1093C14.3008 3.69742 14.4585 3.85391 14.4585 4.04786V6.58129H16.9925C17.1853 6.58129 17.343 6.73838 17.343 6.93173L17.3436 7.65376ZM6.99059 10.4857C6.93401 10.4481 6.87661 10.4086 6.81793 10.3683L6.81781 10.3682C6.77563 10.3393 6.73278 10.3098 6.68909 10.2803C6.38517 10.1872 6.06253 10.1389 5.73203 10.1346H5.69215C4.17318 10.1346 2.84151 11.0536 2.84151 12.1025C2.84151 13.2445 3.98285 14.1369 5.43899 14.1369C7.35976 14.1369 8.33313 13.4735 8.33313 12.1684C8.33313 12.0451 8.31863 11.917 8.28782 11.7884C8.15841 11.284 7.69684 10.9685 6.99867 10.4912L6.99059 10.4857ZM5.91493 6.50516H5.91372H5.89983C4.93491 6.47495 3.9706 5.33482 3.7978 4.01524C3.70173 3.2775 3.85701 2.61408 4.22376 2.19537C4.46001 1.92468 4.77117 1.78088 5.1198 1.78088L5.15907 1.78209C6.14453 1.81049 7.0889 2.91014 7.2611 4.23094C7.35898 4.96988 7.19404 5.66592 6.82184 6.09008C6.58439 6.36197 6.27806 6.50516 5.91493 6.50516Z" fill="#222222"/>
              </svg>
            </a>
          </li>
          <li>
            <a href='#' className='svgWrapper'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.382 8.76909C12.0214 8.52784 11.5792 8.32003 11.0679 8.15159C10.5629 7.98534 9.99198 7.83159 9.37042 7.69472C8.87917 7.57753 8.52104 7.48722 8.30792 7.4269C8.09948 7.36722 7.89167 7.28472 7.68979 7.17972C7.4951 7.07972 7.34104 6.9594 7.23198 6.82222C7.12885 6.69253 7.07885 6.54221 7.07885 6.36222C7.07885 6.06878 7.23448 5.82097 7.55479 5.60472C7.88698 5.38034 8.33479 5.2669 8.8851 5.2669C9.47792 5.2669 9.90917 5.3694 10.1673 5.57159C10.4329 5.7794 10.6648 6.07409 10.8564 6.44909C11.0214 6.74222 11.1707 6.94597 11.3145 7.07659C11.4692 7.2169 11.692 7.28909 11.9764 7.28909C12.2889 7.28909 12.5545 7.17503 12.7648 6.95003C12.9739 6.72628 13.0798 6.47003 13.0798 6.18753C13.0798 5.8944 12.9989 5.59065 12.8398 5.28597C12.6817 4.98472 12.4307 4.69409 12.0929 4.42284C11.7579 4.15315 11.331 3.93409 10.8248 3.7719C10.3217 3.61097 9.71823 3.5294 9.03292 3.5294C8.1751 3.5294 7.41698 3.65253 6.77948 3.89472C6.13385 4.14034 5.6326 4.49878 5.28917 4.9594C4.94292 5.42347 4.7676 5.96159 4.7676 6.55847C4.7676 7.1844 4.93479 7.71753 5.26448 8.14128C5.58948 8.55972 6.03323 8.89409 6.58385 9.13503C7.12229 9.37034 7.79917 9.57909 8.59635 9.75472C9.18229 9.88065 9.65635 10.0013 10.0054 10.1135C10.3395 10.221 10.6157 10.3772 10.8248 10.5782C11.0242 10.7707 11.1214 11.0153 11.1214 11.3275C11.1214 11.7222 10.9351 12.0444 10.5529 12.3132C10.1614 12.5882 9.64104 12.7278 9.00635 12.7278C8.54448 12.7278 8.16948 12.6588 7.89104 12.5235C7.61448 12.3885 7.3976 12.2166 7.24698 12.0113C7.09042 11.7975 6.94167 11.5272 6.80573 11.2063C6.68385 10.9122 6.5326 10.6838 6.35573 10.5297C6.17073 10.3688 5.94292 10.2875 5.67948 10.2875C5.35792 10.2875 5.08823 10.3907 4.87791 10.5941C4.66541 10.7997 4.5576 11.0507 4.5576 11.34C4.5576 11.8032 4.72291 12.2838 5.04916 12.7675C5.37229 13.2469 5.7976 13.6353 6.31354 13.9219C7.03542 14.316 7.9601 14.5153 9.06292 14.5153C9.98135 14.5153 10.7889 14.3691 11.4626 14.0813C12.1426 13.7903 12.6673 13.3807 13.0226 12.8638C13.3792 12.3441 13.5601 11.751 13.5601 11.1003C13.5601 10.556 13.4551 10.0878 13.2476 9.70878C13.041 9.3319 12.7498 9.01534 12.382 8.76909ZM12.5954 17.4003C11.8335 17.4003 11.117 17.2028 10.4904 16.8566C10.0348 16.9435 9.56479 16.9894 9.08417 16.9894C4.84354 16.9894 1.40542 13.4519 1.40542 9.08847C1.40542 8.54409 1.45916 8.01284 1.56104 7.49972C1.1726 6.8194 0.948853 6.02784 0.948853 5.18222C0.948853 2.6519 2.9426 0.600342 5.40198 0.600342C6.27323 0.600342 7.08479 0.858467 7.77135 1.30347C8.19823 1.22784 8.63698 1.18784 9.08417 1.18784C13.3254 1.18784 16.7632 4.72534 16.7632 9.08847C16.7632 9.67034 16.7014 10.2375 16.5857 10.7838C16.8817 11.3969 17.0485 12.0878 17.0485 12.8191C17.0482 15.3485 15.0548 17.4003 12.5954 17.4003Z" fill="#222222"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer
