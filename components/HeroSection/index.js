import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeroContainer,
  HeroContent,
  HeroHeader,
  RowWrapper,
  Card,
  ChapterTitle,
  ChapterImage,
  IconLinks,
} from './HeroElems';
import hover_styles from '../../styles/hover.module.css';

import { chaptersArr } from '../../data/chapterNames';

import { FaFilePowerpoint, FaFileWord, FaFileExcel } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        {/* ROW ONE (CH. 9, 10, 11, 12)
         *******************************
         ******************************* */}
        <RowWrapper>
          {chaptersArr.slice(0, 4).map((chapter) => {
            return (
              <Card
                key={chaptersArr.indexOf(chapter)}
                className={hover_styles.hvr_float}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: 'none',
                    margin: 'none',
                    display: 'flex',
                    border: '2px solid #fdfdfd',
                    borderRadius: '2.5px',
                  }}
                >
                  {/* Next JS images don't respond to border CSS attribute naturally? */}
                  <Image
                    src={
                      chaptersArr.indexOf(chapter) == 0
                        ? '/ch9_pic.jpg'
                        : chaptersArr.indexOf(chapter) == 1
                        ? '/ch10_pic_2.png'
                        : chaptersArr.indexOf(chapter) == 2
                        ? '/ch11_pic.jpg'
                        : '/ch12_pic.png'
                    }
                    // Width of 100% doesn't fill parent container ??
                    width={160}
                    height="100%"
                  />
                </div>
                <ChapterTitle>{chapter}</ChapterTitle>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <IconLinks
                    target="_blank"
                    href={
                      chaptersArr.indexOf(chapter) == 0
                        ? '/pwpts/ch9_ppt.pdf'
                        : chaptersArr.indexOf(chapter) == 1
                        ? '/pwpts/ch10_ppt.pdf'
                        : chaptersArr.indexOf(chapter) == 2
                        ? '/pwpts/ch11_ppt.pdf'
                        : '/pwpts/ch12_ppt.pdf'
                    }
                  >
                    <FaFilePowerpoint
                      style={{
                        height: '25px',
                        width: '20px',
                        color: '#ff6961',
                      }}
                    />
                  </IconLinks>

                  <IconLinks
                    target="_blank"
                    href={
                      chaptersArr.indexOf(chapter) == 0
                        ? '/docx/ch9_docx.pdf'
                        : chaptersArr.indexOf(chapter) == 1
                        ? '/docx/ch10_docx.pdf'
                        : chaptersArr.indexOf(chapter) == 2
                        ? '/docx/ch11_docx.pdf'
                        : '/docx/ch12_docx.pdf'
                    }
                  >
                    <FaFileWord
                      style={{
                        height: '25px',
                        width: '20px',
                        color: '#1da1f2',
                      }}
                    />
                  </IconLinks>

                  <a style={{ cursor: 'not-allowed' }}>
                    <FaFileExcel
                      style={{
                        height: '25px',
                        width: '20px',
                        color: '#2dac66',
                        opacity: '0.3',
                      }}
                    />
                  </a>
                </div>
              </Card>
            );
          })}
        </RowWrapper>

        {/* ROW TWO (CH. 13, 17, 18, 19)
         *******************************
         ******************************* */}

        <RowWrapper>
          {chaptersArr.slice(4, 8).map((chapter) => {
            return (
              <Card
                className={hover_styles.hvr_float}
                key={chaptersArr.indexOf(chapter)}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: 'none',
                    margin: 'none',
                    display: 'flex',
                    border: '2px solid #fdfdfd',
                    borderRadius: '2.5px',
                  }}
                >
                  <Image
                    src={
                      chaptersArr.indexOf(chapter) == 4
                        ? '/ch13_pic.jpg'
                        : chaptersArr.indexOf(chapter) == 5
                        ? '/ch17_pic.png'
                        : chaptersArr.indexOf(chapter) == 6
                        ? '/ch18_pic.png'
                        : '/ch19_pic.png'
                    }
                    width={160}
                    height="100%"
                    display="flex"
                  />
                </div>
                <ChapterTitle>{chapter}</ChapterTitle>

                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <IconLinks
                    target="_blank"
                    href={
                      chaptersArr.indexOf(chapter) == 4
                        ? '/pwpts/ch13_ppt.pdf'
                        : chaptersArr.indexOf(chapter) == 5
                        ? '/pwpts/ch17_ppt.pdf'
                        : chaptersArr.indexOf(chapter) == 6
                        ? '/pwpts/ch18_ppt.pdf'
                        : '/'
                    }
                  >
                    <FaFilePowerpoint
                      style={{
                        height: '25px',
                        width: '20px',
                        color: '#ff6961',
                        opacity:
                          chaptersArr.indexOf(chapter) == 7 ? '0.3' : '1',
                        cursor:
                          chaptersArr.indexOf(chapter) == 7
                            ? 'not-allowed'
                            : 'pointer',
                      }}
                    />
                  </IconLinks>
                  <IconLinks
                    href={
                      chaptersArr.indexOf(chapter) == 4
                        ? '/docx/ch13_docx.pdf'
                        : chaptersArr.indexOf(chapter) == 5
                        ? '/docx/ch17_docx.pdf'
                        : chaptersArr.indexOf(chapter) == 6
                        ? '/docx/ch18_docx.pdf'
                        : '/docx/ch19_docx.pdf'
                    }
                    target="_none"
                  >
                    <FaFileWord
                      style={{
                        height: '25px',
                        width: '25px',
                        color: '#1da1f2',
                      }}
                    />
                  </IconLinks>
                  <Link href="/">
                    <a style={{ cursor: 'not-allowed' }}>
                      <FaFileExcel
                        style={{
                          height: '25px',
                          width: '20px',
                          color: '#2dac66',
                          opacity: '0.3',
                        }}
                      />
                    </a>
                  </Link>
                </div>
              </Card>
            );
          })}
        </RowWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
