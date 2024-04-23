import Profile from '../../assets/images/profile.jpeg'
const Navbar = () => {
  return (
    <div className="bg-[#D8DFEB] flex justify-center">
      <div className="flex justify-around items-center py-3 w-[80%]">
        <svg width="155" height="22" viewBox="0 0 155 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0390694 0H6.96087V0.203704H2.99532V9.57407H5.29621C6.74875 9.57407 8.17512 9.18738 9.42876 8.4537V10.8727C8.17426 10.1552 6.75414 9.77778 5.30896 9.77778H2.99532V19.444C2.99532 20.3548 3.26742 21.2449 3.77671 22H0C0.509292 21.2449 0.781389 20.3548 0.781389 19.444V1.45139L0.0390694 0.0636574V0Z" fill="#0148B7" />
          <path d="M13.9042 0H6.97208V0.203703L8.03998 0.34375C8.03998 0.34375 8.75366 0.466423 9.17299 0.585648C9.69653 0.734501 10.1258 0.832166 10.6316 1.03125C11.0811 1.20817 11.3497 1.33103 11.7776 1.55324C12.1782 1.76125 12.3853 1.88107 12.7544 2.13889C13.0219 2.3258 13.4055 2.66088 13.4055 2.66088L13.9042 3.14467V0Z" fill="#0148B7" />
          <path d="M7.68769 5.80609H3.35358L3.95264 6.53179V19.9213C3.95264 20.6426 3.77365 21.3527 3.43172 21.9878H6.20565C5.86371 21.3527 5.68472 20.6426 5.68472 19.9213V13.5723V5.98433H7.10329C8.91785 5.98433 10.9 6.20312 12.0262 7.62593C12.4585 8.17218 12.7823 8.85538 12.7823 9.67646C12.7823 10.6881 12.2908 11.4456 11.7103 11.9874C10.6541 12.9732 9.11615 13.1012 7.67137 13.1012H5.88007V13.254H8.36749L13.0688 21.4403V21.9878H15.4L10.1126 13.254C10.1126 13.254 14.306 13.1012 14.306 9.67646C14.306 8.06921 13.3825 7.11811 12.4022 6.56127C10.9975 5.76338 9.30316 5.80609 7.68769 5.80609Z" fill="#4F81D1" />
          <path d="M5.6712 13.1006H5.8926V13.2534H5.6712V13.1006Z" fill="#0148B7" />
          <path d="M26.9 18V4.1H35.08V5.96H29.18V10.06H33.78V11.92H29.18V18H26.9ZM47.693 12.48C47.693 15.94 45.133 18.18 41.973 18.18C38.833 18.18 36.453 15.94 36.453 12.48C36.453 9.02 38.933 6.8 42.073 6.8C45.213 6.8 47.693 9.02 47.693 12.48ZM38.773 12.48C38.773 14.98 40.253 16.2 41.973 16.2C43.673 16.2 45.353 14.98 45.353 12.48C45.353 9.98 43.733 8.78 42.033 8.78C40.313 8.78 38.773 9.98 38.773 12.48ZM49.1869 12.48C49.1869 9.04 51.4269 6.8 54.5869 6.8C57.2869 6.8 59.0469 8.14 59.6669 10.46H57.2069C56.8269 9.4 55.9469 8.72 54.5869 8.72C52.7469 8.72 51.5269 10.08 51.5269 12.48C51.5269 14.9 52.7469 16.26 54.5869 16.26C55.9469 16.26 56.7869 15.66 57.2069 14.52H59.6669C59.0469 16.68 57.2869 18.18 54.5869 18.18C51.4269 18.18 49.1869 15.94 49.1869 12.48ZM71.9191 6.98V18H69.6391V16.68C68.9191 17.62 67.6791 18.16 66.3791 18.16C63.7991 18.16 61.8391 16.54 61.8391 13.46V6.98H64.0991V13.12C64.0991 15.14 65.1991 16.18 66.8591 16.18C68.5391 16.18 69.6391 15.14 69.6391 13.12V6.98H71.9191ZM83.1474 14.92C83.1474 16.78 81.5274 18.18 78.9274 18.18C76.2874 18.18 74.4274 16.62 74.3274 14.62H76.6874C76.7674 15.52 77.6274 16.26 78.8874 16.26C80.2074 16.26 80.9074 15.7 80.9074 14.94C80.9074 12.78 74.5074 14.02 74.5074 9.98C74.5074 8.22 76.1474 6.8 78.7474 6.8C81.2474 6.8 82.8874 8.14 83.0074 10.34H80.7274C80.6474 9.38 79.9074 8.72 78.6674 8.72C77.4474 8.72 76.8074 9.22 76.8074 9.96C76.8074 12.18 83.0274 10.94 83.1474 14.92Z" fill="#0148B7" />
          <path d="M98.1863 8.26C98.1863 6.86 97.3863 5.96 95.6063 5.96H93.0863V10.62H95.6063C97.3863 10.62 98.1863 9.64 98.1863 8.26ZM90.8063 4.1H95.6063C98.9063 4.1 100.526 6 100.526 8.26C100.526 9.9 99.6463 11.66 97.3063 12.24L100.746 18H98.0263L94.8263 12.44H93.0863V18H90.8063V4.1ZM108.083 8.72C106.543 8.72 105.303 9.76 105.063 11.5H111.163C111.123 9.8 109.783 8.72 108.083 8.72ZM113.243 14.72C112.623 16.64 110.883 18.18 108.183 18.18C105.023 18.18 102.683 15.94 102.683 12.48C102.683 9.02 104.923 6.8 108.183 6.8C111.323 6.8 113.543 8.98 113.543 12.22C113.543 12.6 113.523 12.96 113.463 13.34H105.043C105.203 15.16 106.503 16.26 108.183 16.26C109.583 16.26 110.363 15.58 110.783 14.72H113.243ZM115.027 12.44C115.027 9.04 117.327 6.8 120.227 6.8C122.087 6.8 123.367 7.68 124.047 8.58V6.98H126.347V18H124.047V16.36C123.347 17.3 122.027 18.18 120.187 18.18C117.327 18.18 115.027 15.84 115.027 12.44ZM124.047 12.48C124.047 10.12 122.427 8.78 120.707 8.78C119.007 8.78 117.367 10.06 117.367 12.44C117.367 14.82 119.007 16.2 120.707 16.2C122.427 16.2 124.047 14.86 124.047 12.48ZM129.341 18V3.2H131.621V18H129.341ZM150.235 18V11.84C150.235 9.82 149.135 8.78 147.475 8.78C145.795 8.78 144.695 9.82 144.695 11.84V18H142.435V11.84C142.435 9.82 141.335 8.78 139.675 8.78C137.995 8.78 136.895 9.82 136.895 11.84V18H134.615V6.98H136.895V8.24C137.635 7.34 138.835 6.8 140.155 6.8C141.895 6.8 143.355 7.54 144.115 8.98C144.795 7.64 146.355 6.8 147.955 6.8C150.535 6.8 152.495 8.42 152.495 11.5V18H150.235Z" fill="#4F81D1" />
        </svg>
        <div className="flex items-center rounded-3xl px-3 bg-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.08871 0C11.0017 0 14.1774 3.17574 14.1774 7.08871C14.1774 11.0017 11.0017 14.1774 7.08871 14.1774C3.17574 14.1774 0 11.0017 0 7.08871C0 3.17574 3.17574 0 7.08871 0ZM7.08871 12.6021C10.1345 12.6021 12.6021 10.1345 12.6021 7.08871C12.6021 4.04214 10.1345 1.57527 7.08871 1.57527C4.04214 1.57527 1.57527 4.04214 1.57527 7.08871C1.57527 10.1345 4.04214 12.6021 7.08871 12.6021ZM13.7718 12.6581L16 14.8855L14.8855 16L12.6581 13.7718L13.7718 12.6581Z" fill="#666666" />
          </svg>
          <input type="search" className="pl-2 outline-none bg-transparent py-3 w-[526px]" placeholder="Search anything here..." />
        </div>
        <div className="flex">
          <div className="mx-2 flex bg-white h-[40px] w-[40px] rounded-[50%] cursor-pointer">
            <div className="flex items-center justify-center h-full w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.23281 15.0592L9.02919e-06 16L0.940809 11.7672C0.321234 10.6083 -0.00196948 9.31411 9.02919e-06 8C9.02919e-06 3.5816 3.58161 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C6.68589 16.002 5.3917 15.6788 4.23281 15.0592ZM4.46481 13.3688L4.98721 13.6488C5.91405 14.1441 6.94912 14.4022 8 14.4C9.2658 14.4 10.5032 14.0246 11.5557 13.3214C12.6081 12.6182 13.4284 11.6186 13.9128 10.4492C14.3972 9.27972 14.524 7.9929 14.277 6.75142C14.0301 5.50994 13.4205 4.36957 12.5255 3.47451C11.6304 2.57946 10.4901 1.96992 9.24858 1.72297C8.0071 1.47603 6.72028 1.60277 5.55083 2.08717C4.38139 2.57157 3.38184 3.39187 2.6786 4.44435C1.97536 5.49682 1.60001 6.7342 1.60001 8C1.60001 9.06719 1.86001 10.0944 2.35201 11.0128L2.63121 11.5352L2.10721 13.8928L4.46481 13.3688Z" fill="#666666" />
              </svg>
            </div>
            {/* <div className="absolute flex items-start justify-end">15</div> */}
          </div>
          <div className="mx-2 flex bg-white h-[40px] w-[40px] rounded-[50%] cursor-pointer">
            <div className="flex items-center justify-center h-full w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.6H15.2C15.4122 1.6 15.6157 1.68429 15.7657 1.83431C15.9157 1.98434 16 2.18783 16 2.4V15.2C16 15.4122 15.9157 15.6157 15.7657 15.7657C15.6157 15.9157 15.4122 16 15.2 16H0.8C0.587827 16 0.384344 15.9157 0.234315 15.7657C0.0842854 15.6157 0 15.4122 0 15.2V2.4C0 2.18783 0.0842854 1.98434 0.234315 1.83431C0.384344 1.68429 0.587827 1.6 0.8 1.6H4V0H5.6V1.6H10.4V0H12V1.6ZM1.6 6.4V14.4H14.4V6.4H1.6ZM3.2 8H4.8V9.6H3.2V8ZM3.2 11.2H4.8V12.8H3.2V11.2ZM6.4 8H12.8V9.6H6.4V8ZM6.4 11.2H10.4V12.8H6.4V11.2Z" fill="#666666" />
              </svg>
            </div>
            {/* <div className="absolute flex items-start justify-end">15</div> */}
          </div>
          <div className="mx-2 flex bg-white h-[40px] w-[40px] rounded-[50%] cursor-pointer">
            <div className="flex items-center justify-center h-full w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7143 11.4286H15.2381V12.9524H0V11.4286H1.52381V6.09524C1.52381 4.47868 2.16598 2.92833 3.30906 1.78525C4.45214 0.642175 6.00249 0 7.61905 0C9.23561 0 10.786 0.642175 11.929 1.78525C13.0721 2.92833 13.7143 4.47868 13.7143 6.09524V11.4286ZM12.1905 11.4286V6.09524C12.1905 4.88282 11.7088 3.72006 10.8515 2.86275C9.99423 2.00544 8.83147 1.52381 7.61905 1.52381C6.40663 1.52381 5.24387 2.00544 4.38656 2.86275C3.52925 3.72006 3.04762 4.88282 3.04762 6.09524V11.4286H12.1905ZM5.33333 14.4762H9.90476V16H5.33333V14.4762Z" fill="#666666" />
              </svg>
            </div>
            {/* <div className="absolute flex items-start justify-end">15</div> */}
          </div>
          <button className='flex items-center'>
            <img src={Profile} alt='' className='h-[40px] w-[40px] mx-2 rounded-[50%]' />
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_28)">
                <path d="M12.2381 13.172L17.1881 8.22198L18.6021 9.63598L12.2381 16L5.87408 9.63598L7.28808 8.22198L12.2381 13.172Z" fill="#666666" />
              </g>
              <defs>
                <clipPath id="clip0_1_28">
                  <rect width="24" height="24" fill="white" transform="translate(0.238098)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar