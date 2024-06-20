import React, { useState, useEffect} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './AssignmentViewer.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const AssignmentViewer = () => {
    const [pdfUrl, setPdfUrl] = useState('');
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        // Fetch the PDF URL from the backend
        const fetchPdfUrl = async () => {
            try {
                const response = await fetch('/api/get-pdf'); // Replace with backend endpoint
                const data = await response.json();
                setPdfUrl(data.url);
            } catch (error) {
                console.error('Error fetching PDF:', error);
            }
        };

        fetchPdfUrl();
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className={styles.pdfViewerContainer}>
            <div className={styles.pdfHeader}>
                <div className={styles.pdfTab}>
                    <span className={styles.tabText}>sample.pdf</span>
                </div>
                <div className={styles.pdfToolbar}>
                    <span className={styles.toolbarItem}>100%</span>
                    <span className={styles.toolbarItem}>-</span>
                    <span className={styles.toolbarItem}>+</span>
                    <span className={styles.toolbarItem}>Fit to width</span>
                    <span className={styles.toolbarItem}>Fit to page</span>
                </div>
            </div>
            <div className={styles.pdfContent}>
                {pdfUrl ? (
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            )
                        )}
                    </Document>
                ) : (
                    <p>Loading PDF...</p>
                )}
            </div>
        </div>
    );
};

export default AssignmentViewer