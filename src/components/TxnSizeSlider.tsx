import { useContext } from 'react'
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'
import { TxnSizeContext } from '../context/TxnSizeContext'
import { TxnSizeCalculator } from '.'

const TxnSizeSlider = () => {
  const { txnSize, setTxnSize } = useContext(TxnSizeContext)

  return (
    <>
      <Box>
        Transaction size {txnSize} vbytes
        <TxnSizeCalculator />
      </Box>

      <Slider
        mt={2}
        aria-label="transaction size"
        colorScheme="orange"
        defaultValue={txnSize}
        min={100}
        max={999}
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
