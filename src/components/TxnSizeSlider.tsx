import { useContext } from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/react'
import { TxnSizeContext } from '../context/TxnSizeContext'

const TxnSizeSlider = () => {
  const { txnSize, setTxnSize } = useContext(TxnSizeContext)

  return (
    <>
      <Box>Transaction size: {txnSize} vbytes</Box>
      <Slider
        aria-label="transaction size"
        defaultValue={txnSize}
        min={100}
        max={1000}
        onChange={(val) => setTxnSize(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  )
}

export default TxnSizeSlider
