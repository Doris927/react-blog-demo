import React from 'react';
import {view as TimeLine} from '../components/timeline';

require('./About.css');

const About = () =>{
    return (
        <div className="content">
            <div className="content-bd">
                <div className="content-left">
                    <section className="practice">
                        <header className="section-hd">
                            <span className="section-title-l"></span>
                            <h2 className="section-title">実践経歴</h2>
                            <span className="section-title-r"></span></header>
                        <div className="section-bd">
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2018.4 ~ 現在</span>
                                    <a className="btn item-more" href="https://www.ntt.com/about-us/company-profile/company-information.html" target="_blank">仕事</a>
                                    <h3 className="item-name">NTTコミュニケーションズ</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>ICTエンジニア</strong>
                                        サービス運用確認試験のプロジェクトマネジメント
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2016.02</span>
                                    <a className="btn item-more" href="https://www.nttcom.co.jp" target="_blank">インターン</a>
                                    <h3 className="item-name">NTTコムウェア</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>エンジニア</strong>
                                        会議室の利用率を向上するため、Chatbotを利用して、Pythonで実際に利用状況を反映するアプリを実装した。
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2015.5 ~ 2015.8</span>
                                    <a className="btn item-more" href="https://www.zbj.com" target="_blank">バイト</a>
                                    <h3 className="item-name">ZhuBaJie</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>エンジニア</strong>
                                        問題集、オンラインテスト、オンライン訂正の機能を持つオンラインテストシステムです。HTML, CSS, JSでFront側を開発し、Java, Springbootで部分サーバ機能を実装した。
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2014.12 ~ 2015.2</span>
                                    <a className="btn item-more" href="https://www.xiniunet.com/" target="_blank">バイト</a>
                                    <h3 className="item-name">XiNiu</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content"><strong>エンジニア</strong>
                                        C++、QTでWindows側のソフトウェアを開発し、Java, Openfireでサーバ側にグループ作成の機能を開発した。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project">
                        <header className="section-hd">
                            <span className="section-title-l"></span>
                            <h2 className="section-title">プロジェクト</h2>
                            <span className="section-title-r"></span>
                        </header>
                        <div className="section-bd">
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2019.02 ~ 現在</span>
                                    <a className="btn item-more" href="#" target="_blank">Link</a>
                                    <h3 className="item-name">個人Blog
                                    </h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content"><strong>Web</strong>
                                        <em>React</em>を利用して個人Blogを利用しました。<em>Redux</em>でStateを管理していて、Github IssuesのApiでデータをもらいます。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2017.4 ~ 2017.7</span>
                                    <a className="btn item-more" href="#" target="_blank">Link</a>
                                    <h3 className="item-name">Android：カメラアプリ</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <strong>Android開発</strong>
                                        写真を撮ることを他人に頼む時、どうやって撮りたいかを伝えるアプリです。<em>Java</em>で<em>Android</em>側のアプリを実装し、<em>PHP</em>でサーバを実装した。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2015.5 ~ 2015.8</span>
                                    <a className="btn item-more" href="#" target="_blank">Link</a>
                                    <h3 className="item-name">オンラインテストシステム</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content"><strong>Web</strong>
                                        問題集、オンラインテスト、オンライン訂正の機能を持つオンラインテストシステムです。<em>HTML</em>, <em>CSS</em>, <em>JS</em>でFront側を開発し、<em>Java</em>, <em>Springboot</em>で部分サーバ機能を実装した。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2014.12 ~ 2015.2</span>
                                    <a className="btn item-more" href="#" target="_blank">Link</a>
                                    <h3 className="item-name">社内チャットツール</h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content">
                                        <em>C++</em>、<em>QT</em>で<em>Windows</em>側のソフトウェアを開発し、<em>Java</em>, <em>Openfire</em>でサーバ側にグループ作成の機能を開発した。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="skill">
                        <header className="section-hd">
                            <span className="section-title-l"></span>
                            <h2 className="section-title">スキル</h2>
                            <span className="section-title-r"></span>
                        </header>
                        <div className="section-bd">
                            <ul className="section-list">
                                <li><p className="section-content"><i className="iconfont icon-xihuan"></i><em>HTML5</em>、<em>CSS3</em>、<em>ES6</em>の基礎を持っている</p></li>
                                <li><p className="section-content"><i className="iconfont icon-xihuan"></i><em>React</em>,<em>Redux</em>を利用できる</p></li>
                                <li><p className="section-content"><i className="iconfont icon-xihuan" ></i><em>Springboot</em>を利用して、Webアプリを開発したことがある</p></li>
                                <li><p className="section-content"><i className="iconfont icon-xihuan"></i><em>MySql</em><em>Sqlite</em>を利用できる</p></li>
                                <li><p className="section-content"><i className="iconfont icon-xihuan"></i><em>Android</em><em>IOS</em>アプリ開発の基礎を持っている</p></li>
                                <li><p className="section-content"><i className="iconfont icon-xihuan"></i><em>Git</em>Version管理、<em>VS Code</em>を利用して開発、<em>Selenium,Unitest</em>などでUIテスト</p></li>
                            </ul>
                        </div>
                    </section>

                    <section className="research">
                        <header className="section-hd">
                            <span className="section-title-l"></span>
                            <h2 className="section-title">研究内容</h2>
                            <span className="section-title-r"></span>
                        </header>
                        <div className="section-bd">
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2015.9 ~ 2017.9</span>
                                    <a className="btn item-more" href="#" target="_blank">Link</a>
                                    <h3 className="item-name">MRI画像復元
                                    </h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content"><strong>画像処理</strong>
                                        <em>Matlab</em>で<em>辞書学習</em>を利用して、MRI画像を復元を研究している。<em>ICASSP 2017</em>で論文<strong>Compressed Sensing MRI using Double Sparsity with additional Image</strong>を発表した。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2015.1 ~ 2015.6</span>
                                    <a className="btn item-more" href="#" target="_blank">Link</a>
                                    <h3 className="item-name">画像復元のAndroid App
                                    </h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content"><strong>画像処理</strong><strong>Android</strong>
                                        <em>機器学習</em>で画像復元のアルゴリズムを実装して、<em>Android</em>アプリ実装した。
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2014.4 ~ 2014.8</span>
                                    <a className="btn item-more" href="#" target="_blank">Link</a>
                                    <h3 className="item-name">車両ナンバー識別ソフトウェア
                                    </h3>
                                </header>
                                <div className="item-bd">
                                    <p className="section-content"><strong>画像処理</strong><strong>Windows</strong>
                                        アルゴリズムを実装して、<em>Windows</em>のソフトウェアを実装した。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="prize">
                        <header className="section-hd">
                            <span className="section-title-l"></span>
                            <h2 className="section-title">賞歴</h2>
                            <span className="section-title-r"></span>
                        </header>
                        <div className="section-bd">
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2017</span>
                                    <h3 className="item-name">立命館大学 情報理工学研究科 優秀研究賞</h3>
                                </header>
                            </div>
                            <div className="item">
                                <header className="item-hd">
                                    <span className="item-time">2015 ~ 2017</span>
                                    <h3 className="item-name">文部科学省奨学金(国費)</h3>
                                </header>
                            </div>
                        </div>
                    </section>
                </div>



                <header className="content-right content-hd">

                    <section className="title">
                        <img className="avator" src="/imgs/tangchenmin.jpg"/>
                            <div className="name">
                                <h1>湯 晨旻</h1>
                            </div>
                            <h2 className="job">TANG CHENMIN</h2>
                    </section>

                    <section className="info">
                        <h3>1993.06　~</h3>
                        <h3>立命館大学　2017.9　修了</h3>
                        <h3>大連理工大学　2015.6　卒業</h3>
                    </section>

                    <section className="skill-level">
                        <h3>HTML</h3>
                        <div className="item i-html">
                            <i className="in"></i><i className="out"></i>
                        </div>
                        <h3>CSS</h3>
                        <div className="item i-css">
                            <i className="in"></i><i className="out"></i>
                        </div>
                        <h3>JavaScript</h3>
                        <div className="item i-js">
                            <i className="in"></i><i className="out"></i>
                        </div>
                        <h3>React</h3>
                        <div className="item i-react">
                            <i className="in"></i><i className="out"></i>
                        </div>
                        <h3>Java</h3>
                        <div className="item i-java">
                            <i className="in"></i><i className="out"></i>
                        </div>
                    </section>

                    <section className="contact">
                        <ul>
                        <li>
                            <a href="https://github.com/tammytangg" target="_blank">
                            <i className="iconfont icon-xihuan"></i>
                            <span className="contact-link"> github.com/tammytangg</span>
                            </a>
                        </li>
                    <li>
                        <a href="mailto:tammytangg@yahoo.co.jp" target="_blank">
                        <i className="iconfont icon-xihuan"></i>
                        <span className="contact-link"> tammytangg@yahoo.co.jp</span>

                    </a>
                </li>
            </ul>
            </section>
        </header>
            </div>
        </div>
    );
}

export default About;

