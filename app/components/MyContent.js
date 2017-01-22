import React,  {Component} from 'react';
import styles from './css/MyContent.css';

export default class MyContent extends Component{
    render(){
        return(
            <div className={styles.contentMarginTop}>
                <h1 className={styles.heroTitle}>HERO</h1>
            </div>
        );
    }
};