import Logo from "@/assets/icons/logo.svg";
import Moon from "@/assets/icons/icon-moon.svg";
import Avatar from "@/assets/icons/image-avatar.jpg";

export default function Drawer() {
  return (
    <div className="drawer">
      <div className="drawer__logo">
        <img src={Logo} alt="Logo" />
        <div className="drawer__logo__overlay"></div>
      </div>
      <div className="drawer__footer">
        <div className="drawer__footer__color-mode">
          <img src={Moon} alt="Color Mode Changer" />
        </div>
        <div className="drawer__footer__avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}
