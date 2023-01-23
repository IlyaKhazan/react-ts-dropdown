import React from 'react'
import styles from './Toggler.module.css'


interface IToggler {
  value: boolean;
  onChange: () => void
}

export const Toggler: React.FC<IToggler> = ({ value, onChange }) => (
  <label className={styles.toggler} htmlFor="toggler">
    <input className={styles.togglerInput}
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className={styles.togglerSlider} />
    <span className={styles.togglerWave} />
  </label>
)
