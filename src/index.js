// import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import App from './document'

ReactPDF.render(App(), `${__dirname}/output.pdf`);
