import Link from 'next/link'

import { Col, Row } from 'react-bootstrap'

import FiatSelection from '../components/FiatSelection'
import Infobox from '../components/Infobox'
import { CurrentDataType } from '../lib/types'

const Header = ({
  currentData,
  heading,
  btnText,
  href,
}: {
  currentData: CurrentDataType
  heading: string
  btnText: string
  href: string
}): JSX.Element => {
  return (
    <>
      <Row>
        <Col xs={7}>
          <h1>{heading}</h1>
        </Col>
        <Col className="text-right">
          <FiatSelection />
        </Col>
      </Row>
      <Row className="mt-2 mb-3">
        <Col xs={8}>
          <Infobox currentData={currentData} />
        </Col>
        <Col xs={4} className="text-right">
          <Link href={href}>
            <a className="btn btn-sm btn-outline-secondary" role="button">
              {btnText}
            </a>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default Header
