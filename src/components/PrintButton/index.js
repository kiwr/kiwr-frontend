import React from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from 'antd';

export const PrintButton = ({ content }) => {
  return (
    <ReactToPrint
      content={content}
      trigger={() => (
        <Button icon="printer" type="dashed" ghost type="primary">
          Imprimir
        </Button>
      )}
    />
  );
};
