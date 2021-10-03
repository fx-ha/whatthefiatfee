import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsQuestionCircle } from 'react-icons/bs'

const TxnSizeCalculator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [txnType, setTxnType] = useState('p2pkh')
  const [inputs, setInputs] = useState(1)
  const [outputs, setOutputs] = useState(1)

  const outpoint = 36
  const scriptsigLengthSmall = 1
  const p2pkhSs = 107
  const nsequence = 4
  const nvalue = 8
  const scriptpubkeyLength = 1
  const p2pkhSpk = 25
  const p2wpkhWitness = 27
  const p2wpkhSpk = 22
  const p2sh23Ss = 254
  const p2sh23Spk = 23
  const p2wsh23Witness = 63.5
  const p2wsh23Spk = 34
  const p2trWitness = 16.5
  const p2trSpk = 34
  const scriptsigLengthBig = 3

  const txnTypes = [
    {
      name: 'p2pkh',
      segwit: false,
      input: outpoint + scriptsigLengthSmall + p2pkhSs + nsequence,
      output: nvalue + scriptpubkeyLength + p2pkhSpk,
    },
    {
      name: 'p2wpkh',
      segwit: true,
      input: outpoint + scriptsigLengthSmall + p2wpkhWitness + nsequence,
      output: nvalue + scriptpubkeyLength + p2wpkhSpk,
    },
    {
      name: 'p2sh',
      segwit: false,
      input: outpoint + scriptsigLengthBig + p2sh23Ss + nsequence,
      output: nvalue + scriptpubkeyLength + p2sh23Spk,
    },
    {
      name: 'p2wsh',
      segwit: true,
      input: outpoint + scriptpubkeyLength + p2wsh23Witness + nsequence,
      output: nvalue + scriptpubkeyLength + p2wsh23Spk,
    },
    {
      name: 'p2tr',
      segwit: true,
      input: outpoint + scriptsigLengthSmall + p2trWitness + nsequence,
      output: nvalue + scriptpubkeyLength + p2trSpk,
    },
  ]

  const overhead = txnTypes.find((el) => el.name === txnType)!.segwit
    ? 10.5
    : 10

  const inputSize = txnTypes.find((el) => el.name === txnType)!.input

  const totalInputSize = inputs * inputSize

  const outputSize = txnTypes.find((el) => el.name === txnType)!.output

  const totalOutputSize = outputs * outputSize

  const totalSize = overhead + totalInputSize + totalOutputSize

  return (
    <>
      <Tooltip label="Calculate transaction size">
        <IconButton
          aria-label="open transaction size calculator"
          colorScheme="orange"
          icon={<BsQuestionCircle />}
          variant="link"
          onClick={onOpen}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Transaction size calculator</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl mb={3}>
              <FormLabel htmlFor="txnType">Transaction type</FormLabel>
              <Select
                id="txnType"
                value={txnType}
                onChange={(e) => setTxnType(e.target.value)}
              >
                <option value="p2pkh">P2PKH</option>
                <option value="p2wpkh">P2WPKH</option>
                <option value="p2sh">P2SH 2-of-3 multisig</option>
                <option value="p2wsh">P2WSH 2-of-3 multisig</option>
                <option value="p2tr">P2TR (Taproot)</option>
              </Select>
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor="inputs">Number of inputs</FormLabel>
              <NumberInput
                id="inputs"
                value={inputs}
                min={1}
                max={252}
                onChange={(val) => setInputs(Number(val))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor="outputs">Number of outputs</FormLabel>
              <NumberInput
                id="outputs"
                value={outputs}
                min={1}
                max={252}
                onChange={(val) => setOutputs(Number(val))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Divider />

            <Text my={3}>Total size: {totalSize} vbytes</Text>

            <Table>
              <Thead>
                <Tr>
                  <Th>Part</Th>
                  <Th>Count</Th>
                  <Th>Size (vbytes)</Th>
                  <Th>Total vbytes</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th>Overhead</Th>
                  <Td>1</Td>
                  <Td>{overhead}</Td>
                  <Td>{overhead}</Td>
                </Tr>
                <Tr>
                  <Th>Inputs</Th>
                  <Td>{inputs}</Td>
                  <Td>{inputSize}</Td>
                  <Td>{totalInputSize}</Td>
                </Tr>
                <Tr>
                  <Th>Outputs</Th>
                  <Td>{outputs}</Td>
                  <Td>{outputSize}</Td>
                  <Td>{totalOutputSize}</Td>
                </Tr>
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Link href="https://bitcoinops.org/en/tools/calc-size/" isExternal>
              <Button mr={1} variant="outline">
                Learn More
              </Button>
            </Link>

            <Button colorScheme="orange" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TxnSizeCalculator
