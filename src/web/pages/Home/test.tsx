import React, { useRef } from 'react';
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

export const Upload = () => {
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();

    try {
      axios.post('https://some-api.com', formData, {
        'content-type': 'multipart/form-data',
      });
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };

  return (
		<Box
				as="form"
				// onSubmit={handleSubmit(handleCreatePack)}
				flex="1"
				borderRadius="8"
				bg="gray.800"
		>
			<Heading size="lg" fontWeight="normal">
				Enviar arquivos
			</Heading>

			<Flex
        w="full"
        h="full"
        flexDir="column"
				my={3}
				cursor="pointer"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
        bgColor="pGray.800"
        color="pGray.200"
        borderWidth={2}
        borderColor='purple.600'
				onDragEnter={handleDragDropEvent}
        onDragOver={handleDragDropEvent}
        onDrop={(e) => {
          handleDragDropEvent(e);
          setFiles(e, 'a');
        }}
				onClick={() => inputRef.current.click()}
      >
				<Flex
          h="full"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Icon as={FiPlus} w={14} h={14} />
          <Text as="span" pt={2} textAlign="center">
						Arraste e solte arquivo(s) aqui, ou clique
          </Text>
        </Flex>
			</Flex>

      <div>
        {/* Display the files to be uploaded */}
        <div>
          <ul>
            {fileNames.map((name) => (
              <li key={name}>
                <span>{name}</span>

                <span onClick={() => removeFile(name)}>
                  <i className="fa fa-times" />
                </span>
              </li>
            ))}
          </ul>

          {files.length > 0 && (
            <ul>
              <li>File types found: {fileTypes.join(', ')}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li>

              <li className="clear-all">
                <button onClick={() => clearAllFiles()}>Clear All</button>
              </li>
            </ul>
          )}
        </div>

        {/* Provide a drop zone and an alternative button inside it to upload files. */}
        <div
          onDragEnter={handleDragDropEvent}
          onDragOver={handleDragDropEvent}
          onDrop={(e) => {
            handleDragDropEvent(e);
            setFiles(e, 'a');
          }}
        >
          <p>Drag and drop files here</p>

          <button onClick={() => inputRef.current.click()}>Or select files to upload</button>

          {/* Hide the crappy looking default HTML input */}
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => {
              setFiles(e, 'a');
              inputRef.current.value = null;
            }}
          />
        </div>
      </div>

      <div className="submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>
		</Box>
  );
};