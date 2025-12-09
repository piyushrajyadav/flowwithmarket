"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Document, Page as PdfPage, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Moon, Sun, Coffee, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";
import { useResizeObserver } from "usehooks-ts";

// Set worker src
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface BookReaderProps {
    pdfUrl: string;
}

const Page = React.forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div className={cn("demoPage h-full shadow-2xl overflow-hidden bg-white", props.className)} ref={ref}>
            <div className="h-full w-full flex items-center justify-center p-0 overflow-hidden">
                {props.children}
            </div>
        </div>
    );
});

Page.displayName = "Page";

export default function BookReader({ pdfUrl }: BookReaderProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [scale, setScale] = useState(1);
    const [theme, setTheme] = useState<"light" | "dark" | "sepia">("dark");
    const bookRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const [pdfDimensions, setPdfDimensions] = useState<{ width: number; height: number } | null>(null);

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        // Initial set
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function onDocumentLoadSuccess(pdf: any) {
        setNumPages(pdf.numPages);
        // Get the first page to determine dimensions
        pdf.getPage(1).then((page: any) => {
            const viewport = page.getViewport({ scale: 1 });
            setPdfDimensions({ width: viewport.width, height: viewport.height });
        });
    }

    const handleNext = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
    };

    const handlePrev = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipPrev();
        }
    };

    const isMobile = windowWidth < 1024; // Tablet breakpoint generally
    const usePortrait = isMobile;

    // Calculate dimensions based on actual PDF aspect ratio
    const getPageDimensions = () => {
        if (!pdfDimensions || windowWidth === 0) return { width: 0, height: 0 };

        const aspectRatio = pdfDimensions.width / pdfDimensions.height;

        // Target height based on viewport - reduce slightly to ensure controls fit
        const targetHeight = isMobile ? window.innerHeight * 0.65 : window.innerHeight * 0.8;
        const targetWidth = targetHeight * aspectRatio;

        // Ensure it fits width-wise too
        const maxWidth = isMobile ? windowWidth * 0.9 : (windowWidth * 0.45); // 0.45 because spread takes 2 pages

        if (targetWidth > maxWidth) {
            return {
                width: maxWidth,
                height: maxWidth / aspectRatio
            };
        }

        return {
            width: targetWidth,
            height: targetHeight
        };
    };

    const { width: pageWidth, height: pageHeight } = getPageDimensions();
    const isReady = pageWidth > 0 && pageHeight > 0 && numPages > 0;

    const themes = {
        light: {
            bg: "bg-[#e2e8f0]", // Slate 200
            bookBg: "bg-white",
            text: "text-slate-900",
            controls: "bg-white text-slate-900 border-slate-300 shadow-xl",
            icon: "text-slate-700 hover:bg-slate-100",
            pdfFilter: "none"
        },
        dark: {
            bg: "bg-[#0f172a]", // Slate 900
            bookBg: "bg-[#1e293b]", // Slate 800
            text: "text-slate-100",
            controls: "bg-slate-800 text-white border-slate-700 shadow-xl shadow-black/50",
            icon: "text-slate-200 hover:bg-slate-700",
            pdfFilter: "invert(0.9) hue-rotate(180deg) contrast(0.8)"
        },
        sepia: {
            bg: "bg-[#5c4033]", // Dark brown
            bookBg: "bg-[#e8dcc5]", // Parchment light
            text: "text-[#433422]", // Dark brown text
            controls: "bg-[#e8dcc5] text-[#433422] border-[#8b5e3c] shadow-xl",
            icon: "text-[#5c4033] hover:bg-[#d4c5a9]",
            pdfFilter: "sepia(0.4) contrast(0.95)"
        },
    };

    const currentTheme = themes[theme];

    return (
        <div
            ref={containerRef}
            className={cn("w-full h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 relative", currentTheme.bg)}
        >
            {/* Controls Bar */}
            <div className={cn("fixed top-4 md:top-8 z-50 flex items-center gap-2 md:gap-4 p-3 md:p-4 rounded-2xl border transition-all", currentTheme.controls)}>
                <div className="flex items-center gap-1">
                    <button onClick={() => setScale(s => Math.max(0.6, s - 0.1))} className={cn("p-2.5 rounded-xl transition-colors", currentTheme.icon)} title="Zoom Out"><ZoomOut size={22} /></button>
                    <span className="text-sm font-bold font-mono w-14 text-center hidden md:block">{Math.round(scale * 100)}%</span>
                    <button onClick={() => setScale(s => Math.min(2.0, s + 0.1))} className={cn("p-2.5 rounded-xl transition-colors", currentTheme.icon)} title="Zoom In"><ZoomIn size={22} /></button>
                </div>

                <div className="w-px h-8 bg-current opacity-20 mx-2" />

                <div className="flex items-center gap-1">
                    <button onClick={() => setTheme("light")} className={cn("p-2.5 rounded-xl transition-colors", currentTheme.icon, theme === "light" && "bg-black/10")} title="Light Mode"><Sun size={22} /></button>
                    <button onClick={() => setTheme("dark")} className={cn("p-2.5 rounded-xl transition-colors", currentTheme.icon, theme === "dark" && "bg-white/10")} title="Dark Mode"><Moon size={22} /></button>
                    <button onClick={() => setTheme("sepia")} className={cn("p-2.5 rounded-xl transition-colors", currentTheme.icon, theme === "sepia" && "bg-black/10")} title="Sepia Mode"><Coffee size={22} /></button>
                </div>

                <div className="w-px h-8 bg-current opacity-20 mx-2" />

                <a href={pdfUrl} download className={cn("p-2.5 rounded-xl transition-colors", currentTheme.icon)} title="Download PDF"><Download size={22} /></a>
            </div>

            {/* Book Container */}
            <div className="relative flex items-center justify-center w-full h-full p-4 overflow-auto">

                {/* Desktop Nav */}
                <button
                    className={cn("hidden md:flex absolute left-8 lg:left-12 z-40 p-4 rounded-full border shadow-2xl transition-all hover:scale-110 active:scale-95 disabled:opacity-50", currentTheme.controls)}
                    onClick={handlePrev}
                >
                    <ChevronLeft size={36} />
                </button>

                <div className="relative transition-all duration-300 transform origin-center" style={{ transform: `scale(${scale})` }}>
                    {/* Ghost loader until dimensions ready */}
                    {!isReady && (
                        <div className="flex flex-col items-center justify-center w-[400px] h-[600px] bg-white/5 rounded-lg animate-pulse">
                            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} className="hidden" />
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                            <p className="text-muted-foreground">Loading Book...</p>
                        </div>
                    )}

                    {isReady && (
                        <Document file={pdfUrl} className="flex justify-center shadow-2xl">
                            {/* @ts-ignore */}
                            <HTMLFlipBook
                                key={`${pageWidth}-${pageHeight}`} // Force re-mount when dimensions change
                                width={pageWidth}
                                height={pageHeight}
                                size="fixed"
                                minWidth={100}
                                maxWidth={2000}
                                minHeight={100}
                                maxHeight={2000}
                                drawShadow={true}
                                flippingTime={600}
                                usePortrait={usePortrait}
                                startZIndex={0}
                                autoSize={false} // Disable autoSize to prevent shrinking
                                maxShadowOpacity={0.3}
                                showCover={true}
                                mobileScrollSupport={true}
                                clickEventForward={true}
                                useMouseEvents={true}
                                swipeDistance={30}
                                showPageCorners={false}
                                disableFlipByClick={false}
                                className="demo-book"
                                style={{ margin: '0 auto' }}
                                ref={bookRef}
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page key={`page_${index + 1}`} number={index + 1} className={currentTheme.bookBg}>
                                        <div style={{
                                            filter: currentTheme.pdfFilter,
                                            mixBlendMode: theme === 'dark' ? 'normal' : 'normal',
                                        }}
                                            className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative"
                                        >
                                            <PdfPage
                                                pageNumber={index + 1}
                                                width={pageWidth}
                                                className="!bg-transparent flex justify-center items-center"
                                                renderTextLayer={false}
                                                renderAnnotationLayer={false}
                                            />

                                            {/* Page Number */}
                                            <div className={cn("absolute bottom-6 w-full text-center text-xs font-mono opacity-60 pointer-events-none", currentTheme.text)}>
                                                - {index + 1} -
                                            </div>
                                        </div>
                                    </Page>
                                ))}
                            </HTMLFlipBook>
                        </Document>
                    )}
                </div>

                {/* Desktop Nav */}
                <button
                    className={cn("hidden md:flex absolute right-8 lg:right-12 z-40 p-4 rounded-full border shadow-2xl transition-all hover:scale-110 active:scale-95 disabled:opacity-50", currentTheme.controls)}
                    onClick={handleNext}
                >
                    <ChevronRight size={36} />
                </button>

            </div>

            {/* Mobile Nav Hint */}
            <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 z-40 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full text-white border border-white/10 shadow-lg">
                <ChevronLeft size={24} onClick={handlePrev} />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">Flip</span>
                <ChevronRight size={24} onClick={handleNext} />
            </div>

        </div>
    );
}
