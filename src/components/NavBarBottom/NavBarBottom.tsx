import './NavBarBottom.scss'

function NavBarBottom () {

    return (
        <div className="navbar-bottom__wrapper">
            <button id='home' className="navbar-bottom__btn navbar-bottom__btn_active">
                <svg className="navbar-bottom__icon navbar-bottom__icon_active"  xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M6.34661 17.9553H2.98382C1.745 17.9553 0.741272 16.9516 0.741272 15.7127V9.11594C0.742027 8.63537 0.845467 8.1605 1.04466 7.72315C1.24386 7.2858 1.53421 6.89606 1.89627 6.58005L7.95748 1.30077C8.36563 0.945706 8.88837 0.750153 9.42934 0.750153C9.97032 0.750153 10.4931 0.945706 10.9012 1.30077L16.9624 6.58107C17.3243 6.89697 17.6146 7.28654 17.8138 7.72371C18.013 8.16087 18.1165 8.63554 18.1174 9.11594V15.7127C18.1174 16.3073 17.8813 16.8776 17.461 17.2981C17.0406 17.7186 16.4705 17.955 15.8759 17.9553H12.7921V11.2287C12.7921 10.3006 12.0399 9.54728 11.1107 9.54728H8.02903C7.09992 9.54728 6.34763 10.3006 6.34763 11.2287L6.34661 17.9553ZM6.34661 17.9553H12.7932" stroke="#292928" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
            </button>
            <button id='catalog' className="navbar-bottom__btn ">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M3.375 7.75H5.125C6.875 7.75 7.75 6.875 7.75 5.125V3.375C7.75 1.625 6.875 0.75 5.125 0.75H3.375C1.625 0.75 0.75 1.625 0.75 3.375V5.125C0.75 6.875 1.625 7.75 3.375 7.75Z" stroke="#85858B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.875 7.75H15.625C17.375 7.75 18.25 6.875 18.25 5.125V3.375C18.25 1.625 17.375 0.75 15.625 0.75H13.875C12.125 0.75 11.25 1.625 11.25 3.375V5.125C11.25 6.875 12.125 7.75 13.875 7.75Z" stroke="#85858B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.875 18.25H15.625C17.375 18.25 18.25 17.375 18.25 15.625V13.875C18.25 12.125 17.375 11.25 15.625 11.25H13.875C12.125 11.25 11.25 12.125 11.25 13.875V15.625C11.25 17.375 12.125 18.25 13.875 18.25Z" stroke="#85858B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.375 18.25H5.125C6.875 18.25 7.75 17.375 7.75 15.625V13.875C7.75 12.125 6.875 11.25 5.125 11.25H3.375C1.625 11.25 0.75 12.125 0.75 13.875V15.625C0.75 17.375 1.625 18.25 3.375 18.25Z" stroke="#85858B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <button id='favorite' className="navbar-bottom__btn ">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M11.0425 18.2091C10.745 18.3141 10.255 18.3141 9.9575 18.2091C7.42 17.3429 1.75 13.7291 1.75 7.60414C1.75 4.90039 3.92875 2.71289 6.615 2.71289C8.2075 2.71289 9.61625 3.48289 10.5 4.67289C11.3837 3.48289 12.8013 2.71289 14.385 2.71289C17.0713 2.71289 19.25 4.90039 19.25 7.60414C19.25 13.7291 13.58 17.3429 11.0425 18.2091Z" stroke="#85858B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <button id='cart' className="navbar-bottom__btn ">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M7.70949 1.75L4.54199 4.92625" stroke="#85858B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.292 1.75L16.4595 4.92625" stroke="#85858B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.75 6.86719C1.75 5.24844 2.61625 5.11719 3.6925 5.11719H17.3075C18.3838 5.11719 19.25 5.24844 19.25 6.86719C19.25 8.74844 18.3838 8.61719 17.3075 8.61719H3.6925C2.61625 8.61719 1.75 8.74844 1.75 6.86719Z" stroke="#85858B" strokeWidth="1.3"/>
                    <path d="M8.54004 12.25V15.3562" stroke="#85858B" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M12.5654 12.25V15.3562" stroke="#85858B" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M3.0625 8.75L4.29625 16.31C4.57625 18.0075 5.25 19.25 7.7525 19.25H13.0288C15.75 19.25 16.1525 18.06 16.4675 16.415L17.9375 8.75" stroke="#85858B" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
            </button>
            <button id='account' className="navbar-bottom__btn ">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M14.872 17.9184C14.102 18.1459 13.192 18.2509 12.1245 18.2509H6.87445C5.80695 18.2509 4.89695 18.1459 4.12695 17.9184C4.31945 15.6434 6.6557 13.8496 9.49945 13.8496C12.3432 13.8496 14.6795 15.6434 14.872 17.9184Z" stroke="#85858B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.125 0.75H6.875C2.5 0.75 0.75 2.5 0.75 6.875V12.125C0.75 15.4325 1.7475 17.2437 4.1275 17.9175C4.32 15.6425 6.65625 13.8487 9.5 13.8487C12.3438 13.8487 14.68 15.6425 14.8725 17.9175C17.2525 17.2437 18.25 15.4325 18.25 12.125V6.875C18.25 2.5 16.5 0.75 12.125 0.75ZM9.5 11.3987C7.7675 11.3987 6.3675 9.99001 6.3675 8.25751C6.3675 6.52501 7.7675 5.125 9.5 5.125C11.2325 5.125 12.6325 6.52501 12.6325 8.25751C12.6325 9.99001 11.2325 11.3987 9.5 11.3987Z" stroke="#85858B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.6322 8.25751C12.6322 9.99001 11.2322 11.3987 9.49969 11.3987C7.76719 11.3987 6.36719 9.99001 6.36719 8.25751C6.36719 6.52501 7.76719 5.125 9.49969 5.125C11.2322 5.125 12.6322 6.52501 12.6322 8.25751Z" stroke="#85858B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    )
}

export default NavBarBottom