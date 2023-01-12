import Image from 'next/image'

import classNames from 'classnames/bind'
import styles from './style/Navbar.module.css'
const cx = classNames.bind(styles)

export default function Navbar() {
  return (
    <div className={cx('navbar')}>
      <Image src="/logo/logo.png" alt="jaepang" width={50} height={50} />
      <strong>jaepang</strong>
      {' dev'}
    </div>
  )
}
