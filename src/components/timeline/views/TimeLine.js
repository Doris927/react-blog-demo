import React, {Component} from 'react';
import TimeLineElement from './TimeLineElement';
require('./TimeLine.css');

const dummyData = [
    {
        id:1,
        time:'2019.2 ~ Now',
        title:'Web: 個人Blog',
        content:"Reactを利用して、個人Blogを開発しました。\n ReduxでStateを管理していて、Github IssuesのApiを利用されています。",
        github:"https://github.com/tammytangg/react-blog-demo"
    },
    {
        id:2,
        time:'2017.3 ~ 2017.6',
        title:'Android: カメラアプリ',
        content:'写真を撮ることを人を頼む時、どんな写真を取りたいか伝えるため、作成したAndoridアプリ。自分の社員を他の利用者と共有できます。' +
        'クライエント側はJavaで開発していて、サーバ側はPHPで実装しました。',
        github:"https://github.com/tammytangg/HappyPai2"
    },
    {
        id:3,
        time:'2016.8 ~ 2016.9',
        title:'IOS: Socialアプリ',
        content:'コンテストを参加するため、このアプリを開発しました。メイン機能は、自分がやりたいことを発送した後、システム上で似てる内容を発送したユーザを探してくれて、連絡方式を交換できます。',
        github:'https://github.com/manaba/Todo'
    },
    {
        id:4,
        time:'2016.2',
        title:'スマホンゲーム: Kyoto Run',
        content:'コンテストを参加するため、このVRスマホンゲームを開発しました。京都から逃げるのゲームです。',
        github:"https://github.com/tammytangg/EscapeKyotoVR"
    },
    {
        id:5,
        time:'2015.5 ~ 2015.8',
        title:'Web：Online Test System',
        content:'Freelancerみたいのサイトで探したアルバイトです。教育業界ベンチャーのため開発した。問題集:' +
        '問題導入（Wordで、web画面で）、問題編集、問題サーチ\n' +
        'オンラインテスト:' +
        'テスト作成、オンラインテスト、テスト後の採点などの機能を実装した。\nFront-end: HTML, CSS, JS。\n' +
        'サーバー：　Java, Springboot。\n',
        github:"https://github.com/tammytangg/OnlineTestSystem"
    },
    {
        id:6,
        time:'2014.12~2015.2',
        title:'Software: 社内チャットツール',
        content:'Windows側のクライエントソフトウェアを開発して、' +
        'サーバー側部分機能：ファイル共有機能、スタンプ機能、グループ公告機能を実装した。クライエント側: C++、QTで実装した。'+
        'サーバーは、Java、OpenFire(XMPPに基づく)で実装した。',
        github:'#'
    },
    {
        id:8,
        time:'2014.6 ~ 2014.9',
        title:'Software: 車両ナンバー識別ソフトウェア',
        content:'コンテストを参加するため、このVRスマホンゲームを開発しました。京都から逃げるのゲームです。',
        github:"#"
    },
    {
        id:9,
        time:'2014.2',
        title:'スマホンゲーム: Smack That Gug',
        content:'Gugを潰すスマホンゲームです。',
        github:"https://github.com/tammytangg/SmackGame"
    },
];

class TimeLine extends Component{
    render(){
        return(
            <section id="cd-timeline" className="cd-container">
                 {dummyData.map(
                            (item) => (
                                <TimeLineElement key={item.id} {...item}></TimeLineElement>
                            ))
                 }
            </section>
        );
    }
}

export default TimeLine;