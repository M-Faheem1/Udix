import React from 'react'
import HeaderListItems from './HeaderListItems'
import Buttons from './Buttons'

function Header() {
  return (
    <div className='header'>
      <div className='headerListing'>
        <div className='svgWrapper'>
          <svg width="70" height="26" viewBox="0 0 70 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4611 20.4072C14.4611 20.9842 14.7233 21.2727 15.2477 21.2727C15.7923 21.2727 16.2461 21.1618 16.6091 20.9398L16.4579 24.7017C15.4897 25.5672 14.4006 26 13.1905 26C10.9114 26 9.67101 25.0346 9.46932 23.1037C8.25918 25.0346 6.6255 26 4.56826 26C2.5312 26 1.21014 25.4895 0.605068 24.4686C0.201689 23.825 0 23.0926 0 22.2714C0 21.4503 0.0605068 20.6957 0.18152 20.0077L1.87571 9.52113H7.01879L5.59688 18.3764C5.53637 18.7759 5.50612 19.1754 5.50612 19.5749C5.50612 20.6402 6.05068 21.1729 7.1398 21.1729C8.04741 21.1729 8.77349 20.8289 9.31805 20.1408L11.0425 9.52113H16.1856L14.4914 20.0077C14.4712 20.1408 14.4611 20.274 14.4611 20.4072Z" fill="#222222"/>
            <path d="M32.6808 20.4072C32.6808 20.9842 32.943 21.2727 33.4674 21.2727C34.0119 21.2727 34.4657 21.1618 34.8288 20.9398L34.6775 24.7017C33.7094 25.5672 32.6203 26 31.4101 26C29.1915 26 27.9612 25.1122 27.7192 23.3367C26.7108 25.1122 25.2283 26 23.272 26C19.9643 26 18.3104 24.4353 18.3104 21.306C18.3104 20.7734 18.3608 20.1852 18.4617 19.5416L19.097 15.6466C19.4197 13.6492 20.1559 12.0623 21.3055 10.886C22.4753 9.68758 24.0888 9.08835 26.146 9.08835C27.4167 9.08835 28.4251 9.38796 29.1714 9.9872L30.7143 0.266324H35.8876L32.711 20.0077C32.6909 20.1408 32.6808 20.274 32.6808 20.4072ZM23.7258 18.8092C23.6854 19.009 23.6653 19.2864 23.6653 19.6415C23.6653 19.9966 23.8165 20.3517 24.1191 20.7068C24.4216 21.0397 24.9258 21.2061 25.6317 21.2061C26.3578 21.2061 26.983 20.8954 27.5074 20.274L28.415 14.6812C28.1932 14.1263 27.6688 13.8489 26.8419 13.8489C25.2889 13.8489 24.3813 14.6701 24.1191 16.3124L23.7258 18.8092Z" fill="#222222"/>
            <path d="M43.6656 21.2727C44.1295 21.2727 44.5429 21.1618 44.906 20.9398L44.7547 24.7017C43.8068 25.5672 42.7277 26 41.5176 26C39.6822 26 38.4923 25.5339 37.9477 24.6018C37.5847 23.9804 37.4031 23.3257 37.4031 22.6376C37.4031 21.9274 37.4435 21.306 37.5242 20.7734L39.3394 9.52113H44.4824L42.7882 20.0077C42.7681 20.1408 42.758 20.2629 42.758 20.3739C42.758 20.9731 43.0605 21.2727 43.6656 21.2727ZM39.9444 4.09475C39.9444 2.67435 40.2268 1.64234 40.7915 0.998719C41.3764 0.332906 42.2739 0 43.4841 0C45.1783 0 46.0254 0.82117 46.0254 2.46351C46.0254 3.86172 45.7329 4.88263 45.148 5.52625C44.5833 6.16987 43.6858 6.49168 42.4555 6.49168C40.7814 6.49168 39.9444 5.6927 39.9444 4.09475Z" fill="#222222"/>
            <path d="M61.8926 25.5339H56.2654L54.1174 20.9065L50.487 25.5339H44.8599L51.3946 17.3444L47.4617 9.28809H53.1796L55.2368 13.8489L58.7765 9.28809H64.4944L57.9294 17.3777L61.8926 25.5339Z" fill="#222222"/>
            <path d="M63.9191 23.6031C63.9191 22.1827 64.2014 21.1507 64.7662 20.507C65.3309 19.8412 66.2284 19.5083 67.4587 19.5083C69.1529 19.5083 70 20.3295 70 21.9718C70 23.37 69.7076 24.391 69.1227 25.0346C68.5579 25.6782 67.6604 26 66.4301 26C64.7561 26 63.9191 25.201 63.9191 23.6031Z" fill="#222222"/>
          </svg>
        </div>
        <HeaderListItems/>
      </div>
        <div className='headerButtons'>
        <Buttons/>
        </div>
    </div>
  )
}

export default Header 
