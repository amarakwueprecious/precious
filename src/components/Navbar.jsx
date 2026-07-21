// import "../styles/navbar.css";

// function Navbar() {
//   return (
//     <header className="navbar">

//       <div className="logo">+
//         Precious.
//       </div>

//       <nav>

//         <ul className="nav-links">

//           <li>
//             <a href="#hero">Home</a>
//           </li>

//           <li>
//             <a href="#about">About</a>
//           </li>

//           <li>
//             <a href="#skills">Skills</a>
//           </li>

//           <li>
//             <a href="#projects">Projects</a>
//           </li>

//           <li>
//             <a href="#contact">Contact</a>
//           </li>

//         </ul>

//       </nav>

//       <button className="resume-btn">
//         Resume
//       </button>

//     </header>
//   );
// }
import { useState } from "react";
import "../styles/navbar.css";
import resume from "../assets/resume/Nzubechukwu_Precious_Premium_Resume.docx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

   const downloadCV = () => {
      const link = document.createElement("a");
      link.href = resume;
      link.download = "Nzubechukwu_Precious_Premium_Resume.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const scrollToProjects = () => {
      const section = document.getElementById("projects");
      section?.scrollIntoView({
        behavior: "smooth",
      });
    };

  return (
    <header className="navbar">
      <div className="logo">Precious.</div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <button className="resume-btn"
        onClick={downloadCV} >
          Resume
        </button>
      </nav>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;

// export default Navbar;