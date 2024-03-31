import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function LeftSide() {
    return (
        <div style={styles.container}>
            <div style={styles.background}></div>
            <div style={styles.rectangle1}></div>
            <div style={styles.vector6}></div>
            <div style={styles.vector5}></div>
            <div style={styles.logo}></div>
            <div style={styles.vector2}></div>
            <div style={styles.vector1}></div>
            <div style={styles.title}>SpiritPleasure</div>
            <div style={styles.subtitle}>насолодись Україною</div>
        </div>
    );
}

const styles = {
    container: {
        position: 'absolute',
        width: '960px',
        height: '1082.29px',
        left: '0px',
        top: '0.11px',
    },
    background: {
        position: 'absolute',
        width: '960px',
        height: '1082.29px',
        left: '0px',
        top: '0.11px',
        backgroundColor: '#31241E',
        borderRight: '2.01389px solid #FFFFFF',
    },
    vector6: {
        position: 'absolute',
        width: '834px',
        height: '441.32px',
        left: '834px',
        top: '1082.11px',
        backgroundColor: '#45590B',
        border: '1.00694px solid #45590B',
        transform: 'rotate(180deg)',
    },
    vector5: {
        position: 'absolute',
        width: '760px',
        height: '379px',
        left: '200px',
        top: '0.11px',
        backgroundColor: '#45590B',
        border: '1.00694px solid #45590B',
    },
    logo: {
        position: 'absolute',
        width: '499px',
        height: '515.98px',
        left: '231px',
        top: '207.11px',
    },
    vector2: {
        position: 'absolute',
        width: '499px',
        height: '515.98px',
        left: '231px',
        top: '207.11px',
        backgroundColor: '#86A135',
        border: '5.03472px solid #86A135',
    },
    vector1: {
        position: 'absolute',
        width: '426.58px',
        height: '354.73px',
        left: '244.58px',
        top: '344.87px',
        border: '5.03472px solid #C8DBBE',
    },
    title: {
        position: 'absolute',
        width: '671.1px',
        height: '159px',
        left: '144px',
        top: '729.11px',
        fontFamily: 'Cooper Black',
        fontSize: '70px',
        lineHeight: '80px',
        textAlign: 'center',
        color: '#C8DBBE',
        mixBlendMode: 'normal',
    },
    subtitle: {
        position: 'absolute',
        width: '632.86px',
        height: '79.11px',
        left: '162.64px',
        top: '809px',
        fontFamily: 'Kurale',
        fontSize: '40px',
        lineHeight: '18px',
        textAlign: 'center',
        color: '#E8E8E8',
    },
};

ReactDOM.render(<LeftSide />, document.getElementById('root'));
