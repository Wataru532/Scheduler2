import React from 'react';
import './about.module.css'; // Assuming the CSS is stored in a file named About.css

const About = () => {
    return (
        <div className="about-body">
            <div className="blur1"></div>
            <div align="center"><p className='about-p1'>Scheduler</p></div>
            <div align="center"><p className="about-p2">時間割を、</p></div>
            <div align="center"><p className="about-p3">もっとスマートに</p></div>
            <div align="center"><img className="about-img1" src="https://wataru532.github.io/Scheduler/artworks/scheduler_icon_tentative1.png" alt="Scheduler Icon" /></div><br/>
            <div align="center"><a href="./home.html" className="about-login" align="center">早速使ってみる</a></div>
            <div align="center"><h1>This page is now under construction</h1></div>
            <div align="center"><h5>We apologize for the inconvenience.</h5></div>
            {/*
            #imageを挿入<br>
            <h3 class="about-heading">誰でも、どこでも、いつでも。</h3><br>
            <p class="normal_txt">
                yamgatahigashi.jp<wbr>
                のアカウントさえ<wbr>
                持っていれば、<wbr>
                ChromeBookでも<wbr>
                スマートフォンでも<wbr>
                どこでも<wbr>
                簡単に時間割を<wbr>
                確認できます。
            </p><br>
            <p class="normal_txt">
                Googleアカウント<wbr>
                との連携で、<wbr>
                いつでもログイン可能。
            </p><br>
            <h3 class="about-heading">一目でわかる教科</h3><br>
            <p class="normal_txt">
                適切に設定された<wbr>
                各教科ごとの<wbr>
                色分けによって、<wbr>
                瞬時に教科を<wbr>
                判断できます。<wbr>
            </p>
            */}
            <footer></footer>
        </div>
    );
};

export default About;
