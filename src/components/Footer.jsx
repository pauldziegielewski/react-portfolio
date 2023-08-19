import { NavLink } from "react-router-dom";



export default function Footer() {
    return (
      <div>
        <hr className="divider-footer" />
         <ul className="nav-list-footer">
         <li>
    <a className="link" href="https://www.linkedin.com/in/paul-dziegielewski-b0690127b/" target="_blank">
        <ion-icon className="icon-footer" name="logo-linkedin"></ion-icon>
    </a>
</li>

<li>
    <a className="link" href="mailto:paulj_d@hotmail.com">
        <ion-icon className="icon-footer" name="mail-outline"></ion-icon>
    </a>
</li>

<li>
    <a className="link" href="https://github.com/pauldziegielewski" target="_blank">
        <ion-icon className="icon-footer" name="logo-github"></ion-icon>
    </a>
</li>

        </ul>
            <a target="_blank" href="https://icons8.com/icon/t4YbEbA834uH/react-native">React Native</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    
    );
}