import React from 'react';
import oldBeing from "../../assets/images/large-being-one.png";
import wiggleOne from "../../assets/images/wiggle-one.png";
import Button from "../../components/button/Button";
import styles from "./Splashscreen.module.css";

function Splashscreen() {
    return (
        <section className={styles['splashscreen_outer-container']}>
            <section className={styles['splashscreen_inner-container']}>
                <section className={styles['splashscreen_inner-section-one']}>
                    <span className={styles['splashscreen_image-wrapper']}>
                        <img src={oldBeing} alt="oldbeing"/>
                    </span>
                    <h1 className={styles['splashscreen_heading-one']}>The Legend of Witch Island</h1>
                </section>
                <section className={styles['splashscreen_inner-section-two']}>
                    <p>this site is under construction. please return soon to us.</p>
                    {/*<div>*/}
                    {/*    Disclaimer & trigger warning: This tale contains themes of death and dying, descriptions of*/}
                    {/*    drowning, and horror elements. Reader discretion is advised.*/}
                    {/*</div>*/}
                    {/*<Button*/}
                    {/*    name="enter"*/}
                    {/*/>*/}
                </section>
            </section>
            <span className={styles['splashscreen_wiggle-one']}>
                        <img src={wiggleOne} alt="oldbeing"/>
            </span>
            <span className={styles['splashscreen_wiggle-two']}>
                        <img src={wiggleOne} alt="oldbeing"/>
            </span>
        </section>
    )
        ;
}

export default Splashscreen;