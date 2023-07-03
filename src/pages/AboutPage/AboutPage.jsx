import React from "react";
import banner from "../../shared/assests/images/banner-bgup.png";
import AboutLogo from "../../shared/assests/images/About-logo.jpeg";
// import About_header from "../../shared/assests/images/About-header.jpg";
// import blockchain from "../../shared/assests/images/images.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileContract, faInfinity } from '@fortawesome/free-solid-svg-icons';
import "./AboutPage.css";
import Navbar from "../Home/Components/Navbar/Navbar";
import Footer from "../Home/Components/Footer/Footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar/>
      <header id="about" className="py-5">
        <div className="about-layer d-flex flex-column justify-content-center p-5 ">
          <h1 className="heading">عن دوام </h1>
          <p className="text text-white"> هو وسيلة لحفظ الأوقاف الموثقة بشكل غير قابل للتغيير أو التلف عبر مرور العصور بصورة لامركزية باستخدام تقنية البلوكتشين</p>
        </div>
      </header>
      <section className="wqf-history py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">  عن الأوقاف</h2>
            <p>
              عبر العهود الإسلامية أنشأت أوقاف خلدها التاريخ حققت مقاصدها عبر
              العصور وما خطه الرحالة وكاتبي السير أرشدنا إلى روائع لم تكن
              بالحسبان ففي أوج حضارتنا خصص وقف لكل حاجة ومطلب وكان لنا وراء كل
              وقف قصة يدلنا عليها الواقف والدافع والجهة الموقوف .عليها والوقف
              ووثيقة الوقف وغيره .
            </p>
          </div>
          <div className="row g-1 my-5">
            <div className="col-sm-12 col-md-6 offset-1">
              <div>
                <p>
                  <h4 className="heading">فالوقف هو:</h4>
                  هو حبس الأصل، وتسبيل المنفعة فالعين الموقوفة تخرج من سوق
                  المعاملات وشرط الأصل أن يكون مما يمكن الانتفاع به .
                </p>
              </div>
              <div>
                <h4 className="heading">أنواع الوقف</h4>
                <ul>
                  <li>
                    <span className="fw-bold">وقف خيري:</span>يكون ريعه
                    مخصصاً للإنفاق على وجوه البر الخاصة والعامة
                  </li>
                  <li>
                    <span className="fw-bold">وقف أهلي:</span>
                    :يكون ريعه مخصصاً للإنفاق على ذرية الواقف ونسله من بعده إلى
                    حين انقراضهم فيؤول إلى الخيرات وجهات البر
                  </li>
                  <li>
                    <span className="fw-bold">وقف مختلط:</span>
                    :وهو مزيج بين الخيري والأهلي وكان الأغلب في مصر
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="heading">هيئه الأوقاف</h4>
                <p>
                  نشأة هيئة الأوقاف المصرية بتاريخ 10 أكتوبر 1971 صدر القرار
                  الجمهوري رقم 80 لسنة 1971 بإنشاء هيئة للأوقاف، هيئة ذات شخصية
                  اعتبارية وتتبع وزير الأوقاف تقوم بإدارة واستثمار أموال الأوقاف
                  نيابة عن الوزير وتنفيذا لهذا القانون فقد أصبحت هيئة الأوقاف
                  المصرية منوط بها استلام وإدارة واستثمار أموال وإيرادات وأعيان
                  الأوقاف الخيرية والحفاظ عليها.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5">
              <div>
                <img
                  src={banner}
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wqf-platform py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="heading"> منصة دوام</h2>
          </div>
          <div className="dawam-info">
            <div className="row g-1 my-5">
              <div className="col-sm-12 col-md-5 offset-1">
                <div className="dawam-img">
                  <img
                    src={AboutLogo}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 d-flex align-items-center ">
                <div className="dawam-content text-center">
                  <p>
                    يوجد الان بوزارة الأوقاف <b>150000</b> حجة وقف بأرشيف
                    الوزارة تحت حماية أمنية يصعب الاطلاع عليها وقابلة للتلف
                  </p>
                  <p>
                    وهنا يأتي دور منصة دوام لحماية هذه الحجج (الوثائق) حتى لا
                    تؤول مآل اخواتها المفقودة جراء تغيير الظروف
                  </p>
                  <p>
                    حيث يتم في دوام تخليد الأوقاف وحفظها للأبد على شبكة Ethereum
                    القائمة على تقنية ال Blocchain.
                  </p>
                  <p>
                    وذلك من خلال استخدام العقود الذكية و الرموز غير قابلة
                    للاستبدال (NFTs) لتشفير الحجج الوقفية وبالتالي ضمان حماية
                    الأوقاف من التغيير أو التلف أو الفقد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="platform-Technology">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">  عن البلوكتشين</h2>
            <p>هي سلسلة البيانات الموزعة، والتي تختص بإدارة قائمة متزايدة ومستمرة من السجلات المسماة بالكتل، فهي عبارة عن سلاسل كتل يتبع بعضها بعضاً، إذ تحوي كل كتلة على طابع زمني ومرتبط بالكتلة السابقة </p>
          </div>
          <div className="Technology-info">
            <div className="row  my-5">
            <h2 className="heading text-center">  عناصر البلوكتشين</h2>
              <div className=" col-md-4 my-5 bg-white border-1 shadow ">
                <div className="tech-items text-center p-4 ">
                <FontAwesomeIcon icon={faUsers} className="text-center fs-1 py-sm-1 py-md-2 techIcons"/>
                <h2>موزعة</h2>
                <p>يمكن لجميع المشاركين في الشبكة الوصول إلى دفتر الأستاذ الموزع وسجل المعاملات الثابت.</p>
                </div>
             
              </div>
              <div className=" col-md-4  my-5 bg-white border-1 shadow ">
                <div className="tech-items text-center p-4 ">
                <FontAwesomeIcon icon={faInfinity} className="text-center fs-1 py-sm-1 py-md-2 techIcons"/>
                <h2>غير قابلة للتغيير</h2>
                <p>لا يمكن لأي مشارك تغيير معاملة أو التلاعب بها بعد تسجيلها في دفتر الأستاذ المشترك</p>
                </div>
             
              </div>
              <div className=" col-md-4 my-5 bg-white border-1 shadow ">
                <div className="tech-items text-center p-4 ">
                <FontAwesomeIcon icon={faFileContract} className="text-center fs-1 py-sm-1 py-md-2 techIcons" />
                <h2>العقود الذكية</h2>
                <p>لتسريع المعاملات ، يتم تخزين مجموعة من القواعد - تسمى العقد الذكي - على البلوكتشين ويتم تنفيذها تلقائيًا.</p>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
