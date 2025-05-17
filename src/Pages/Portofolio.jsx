import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "flowbite-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import FotoProfile from "../assets/images/Foto.jpg";

import AtmaCinemaProject from "../assets/images/AtmaCinemaProject.png";
import HotelOlangKayaProject from "../assets/images/HotelOlangKayaProject.png";
import PortfolioWebsiteProject from "../assets/images/PortfolioWebsiteProject.png";
import Project4Image1 from "../assets/images/WebDesaLogin.png";
import Project4Image2 from "../assets/images/WebDesaMaster.png";
import ReuseMart from "../assets/images/ReuseMart.png";

import jsIcon from "../assets/images/icons/javascript.png";
import htmlIcon from "../assets/images/icons/html.png";
import cssIcon from "../assets/images/icons/css.png";
import reactIcon from "../assets/images/icons/react.png";
import flutterIcon from "../assets/images/icons/flutter.png";
import laravelIcon from "../assets/images/icons/laravel.png";
import mysqlIcon from "../assets/images/icons/mysql.png";
import tailwindIcon from "../assets/images/icons/tailwind.png";
import phpIcon from "../assets/images/icons/php.png";
import c from "../assets/images/icons/c.png";
import java from "../assets/images/icons/java.png";
import python from "../assets/images/icons/python.png";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quad',
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    const images = [
      FotoProfile,
      AtmaCinemaProject,
      HotelOlangKayaProject,
      PortfolioWebsiteProject,
      jsIcon, htmlIcon, cssIcon, reactIcon, flutterIcon,
      laravelIcon, mysqlIcon, tailwindIcon, phpIcon, c, java, python
    ];
    images.forEach(src => {
      new Image().src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white font-sans scroll-smooth">
      <header className="p-6 flex justify-between items-center w-full sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline transition-all duration-300">About</a>
          <a href="#skills" className="hover:underline transition-all duration-300">Skills</a>
          <a href="#projects" className="hover:underline transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:underline transition-all duration-300">Contact</a>
        </nav>
      </header>

      <section className="text-center py-20 px-4" id="about">
        <img
          src={FotoProfile}
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg shadow-blue-500/50 transition-all duration-500 hover:scale-105"
          loading="eager"
        />
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Eric Daniswara Octa Wijaya</h2>
        <p className="text-lg max-w-5xl mx-auto mb-4" data-aos="fade-up" data-aos-delay="100">
          I am an <span className="font-semibold text-blue-300">Informatics student</span> at <span className="font-semibold text-blue-300">Atma Jaya University Yogyakarta</span>, driven by a strong interest in the world of software development and emerging technologies. With a solid foundation in both front-end and back-end development, I aim to create solutions that are not only technically robust but also intuitive and user-centered.
        </p>
        <p className="text-lg max-w-5xl mx-auto mb-4" data-aos="fade-up" data-aos-delay="200">
          My passion lies in leveraging <span className="font-semibold text-blue-300">technology to solve real-world problems</span>. I am particularly interested in how digital systems can improve everyday processes, enhance business operations, and create positive social impact. Through continuous learning and practical project experiences, I strive to sharpen my skills and stay updated with the latest in tech.
        </p>
        <div className="flex justify-center space-x-4 mt-6" data-aos="fade-up" data-aos-delay="300">
          <a href="https://github.com/erd696" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/ericdaniswara/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
            <FaLinkedin size={28} />
          </a>
          <a href="https://www.instagram.com/erd696_/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
            <FaInstagram size={28} />
          </a>
        </div>
      </section>

      <section className="bg-gray-900 py-16 px-4" id="skills">
        <h3 className="text-5xl font-semibold text-center mb-12" data-aos="fade-up">Skills</h3>
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{ 
              delay: 2500, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            speed={800}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={false}
          >
            {[
              { name: "ReactJS", icon: reactIcon },
              { name: "Flutter", icon: flutterIcon },
              { name: "C", icon: c},
              { name: "Java", icon: java },
              { name: "Python", icon: python },
              { name: "Laravel", icon: laravelIcon },
              { name: "MySQL", icon: mysqlIcon },
              { name: "Tailwind CSS", icon: tailwindIcon },
              { name: "PHP", icon: phpIcon },
              { name: "JavaScript", icon: jsIcon },
              { name: "HTML", icon: htmlIcon },
              { name: "CSS", icon: cssIcon },
            ].map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-700 rounded-xl py-10 px-6 flex flex-col items-center text-xl font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-24 h-24 mb-4 transition-transform duration-500 hover:scale-110" 
                    loading="lazy"
                  />
                  <span>{skill.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-gray-800 py-16 px-4" id="projects">
        <h3 className="text-6xl font-semibold text-center mb-16 mt-12" data-aos="fade-up">Projects</h3>
        <div className="flex flex-col gap-14 max-w-6xl mx-auto">

          {/* Project 1 */}
          <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/50 flex flex-col items-center mb-24 transition-all duration-500 hover:-translate-y-2" data-aos="fade-up">
            <h4 className="text-7xl font-bold mb-2 text-center">Atma Cinema</h4>
            <p className="mb-8 text-m text-gray-300 text-center">
              Flutter | Laravel (Backend) | MySQL (Database)
            </p>
            <div className="flex flex-col gap-6 mb-10 items-center px-4">
              <img
                src={AtmaCinemaProject}
                alt="atma cinema"
                className="rounded-xl max-w-[800px] max-h-[550px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="space-y-4 text-center max-w-[800px]">
                <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                  Developed a Flutter project for Atma Cinema, a sleek and user-friendly mobile application designed to simplify the movie ticket booking experience.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                  The application allows users to browse currently playing films and coming soon films, view showtimes, book tickets, and view food and drink that Atma Cinema sell. 
                  Users can also manage their bookings and access their transaction history. The interface is designed with a focus on simplicity and responsiveness, ensuring a smooth experience across various devices.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/50 flex flex-col items-center mb-24 transition-all duration-500 hover:-translate-y-2" data-aos="fade-up">
            <h4 className="text-7xl font-bold mb-2 text-center">Hotel OlangKaya</h4>
            <p className="mb-8 text-m text-gray-300 text-center">
              HTML | CSS | JavaScript | Laravel (Backend) | MySQL (Database)
            </p>
            <div className="flex flex-col gap-6 mb-10 items-center px-4">
              <img
                src={HotelOlangKayaProject}
                alt="hotel olang kaya"
                className="rounded-xl max-w-[800px] max-h-[550px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="space-y-4 text-center max-w-[800px]">
                <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                  Developed a dynamic and responsive website for Hotel OlangKaya, offering seamless booking services and efficient management tools. The platform is designed with two main functionalities for Users and Admins to ensure a comprehensive digital solution.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                  A website that provides a user-friendly interface for hotel guests to book rooms and manage their hall reservations with ease. Guests can view detailed room information, including photos, amenities, pricing, and availability in real time.
                  <br /><br />
                  On the administrative side, the system features a dedicated Admin panel where hotel staff can efficiently manage all incoming bookings, update room and hall availability, and monitor reservation statuses. Staff can also add, edit, or remove room and hall details, configure seasonal pricing, and manage user feedback or inquiries through an integrated dashboard. Admin also can manage all users data. The platform aims to streamline hotel operations while enhancing the overall guest experience.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/50 flex flex-col items-center transition-all duration-500 hover:-translate-y-2 mb-24" data-aos="fade-up">
            <div className="text-center mb-2">
              <p className="text-m text-gray-500">[on going project]</p>
              <h4 className="text-7xl font-bold">ReuseMart</h4>
            </div>
            <p className="mb-8 text-m text-gray-300 text-center">
              ReactJS | Flutter | Laravel (Backend) | MySQL (Database)
            </p>
            <div className="flex flex-col gap-6 mb-10 items-center px-4">
              <img
                src={ReuseMart}
                alt="portofolio website"
                className="rounded-xl max-w-[800px] max-h-[550px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="space-y-4 text-center max-w-[800px]">
                <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                  ReuseMart is a second-hand goods platform based on a consignment system, where sellers submit their pre-owned items to ReuseMart’s warehouse for sale. The system is designed to optimize the resale and redistribution of used goods while supporting sustainability and social impact. In addition to buying and selling, the platform includes a donation system that allows unsold and unclaimed items to be donated to registered organizations.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                  This platform accommodates various user roles, each with distinct responsibilities, including Warehouse Staff for inventory and item management, Customer Service for addressing customer inquiries, Couriers for managing pickups and deliveries, Hunters for sourcing potential sellers or valuable second-hand goods, Admins for overseeing operational tasks, and Owners for handling analytics and strategic decisions.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                  The platform consists of a ReactJS-based web application that provides full access to all roles, enabling comprehensive features such as transactions, master data management, and system administration, while the Flutter-based mobile application serves as a lightweight version focused on field operations, offering view-only access, merchandise transactions, and courier-specific functionalities.
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/50 flex flex-col items-center mb-24 transition-all duration-500 hover:-translate-y-2" data-aos="fade-up">
            <div className="text-center mb-2">
              <p className="text-m text-gray-500">[on going project]</p>
              <h4 className="text-7xl font-bold">Web Sistem Database Padukuhan</h4>
            </div>
            <p className="mb-8 text-m text-gray-300 text-center">
              ReactJS | Laravel (Backend) | MySQL (Database)
            </p>
            <div className="flex flex-col gap-6 mb-10 items-center px-4 w-full">
              <div className="w-full max-w-[800px]">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className="rounded-xl"
                >
                  <SwiperSlide>
                    <img
                      src={Project4Image1}
                      alt="Project 4 Screenshot 1"
                      className="rounded-xl w-full h-auto max-h-[550px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Project4Image2}
                      alt="Project 4 Screenshot 2"
                      className="rounded-xl w-full h-auto max-h-[550px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="space-y-4 text-center max-w-[800px]">
                <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                  Developed a Website for Padukuhan Pakel to manage their data. The website is designed to be user-friendly and efficient, allowing users to easily navigate through various functionalities.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                  This website is designed to facilitate the management of Padukuhan Pakel's data, including the ability to add, edit, and delete data entries. The system is built with a focus on user experience, ensuring that users can easily navigate through the various functionalities without any hassle.
                </p>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/50 flex flex-col items-center transition-all duration-500 hover:-translate-y-2 mb-24" data-aos="fade-up">
            <h4 className="text-7xl font-bold mb-2 text-center">Portofolio Website</h4>
            <p className="mb-8 text-m text-gray-300 text-center">
              ReactJS | Tailwind CSS 
            </p>
            <div className="flex flex-col gap-6 mb-10 items-center px-4">
              <img
                src={PortfolioWebsiteProject}
                alt="portofolio website"
                className="rounded-xl max-w-[800px] max-h-[550px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="space-y-4 text-center max-w-[800px]">
                <p className="text-base sm:text-lg leading-relaxed text-gray-100">
                  Developed a static portfolio website using ReactJS and Tailwind CSS. The website showcases my projects, skills, and contact information in a visually appealing and responsive layout.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400">
                  The website features a clean and modern design, with smooth scrolling and hover effects. It is fully responsive, ensuring a seamless experience across all devices. The project demonstrates my proficiency in front-end development and my ability to create user-friendly interfaces.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="text-center py-16 px-4" id="contact" data-aos="fade-up">
        <h3 className="text-3xl font-semibold mb-6">Get In Touch</h3>
        <p className="mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
        
        <div className="text-lg mb-6 space-y-2">
          <p>Email: <a href="mailto:ericdaniswara2345.pbg@gmail.com" className="text-blue-400 hover:underline transition-all duration-300">ericdaniswara2345.pbg@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/6285960199033" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline transition-all duration-300">+62 859 6019 9033</a></p>
        </div>

        <a href="https://wa.me/6285960199033" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform duration-300 hover:scale-105">
          <Button gradientDuoTone="purpleToBlue">Contact Me on WhatsApp</Button>
        </a>
      </section>

      <footer className="text-center py-6 bg-gray-900 text-sm">
        © {new Date().getFullYear()} Eric Daniswara Octa Wijaya. All rights reserved.
      </footer>
    </div>
  );
}