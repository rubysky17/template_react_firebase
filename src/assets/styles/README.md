# STYLE GUIDE

# Styling Cheat Sheet

## Mô tả

    - Các class được định nghĩa để sử dụng chung với prefix "md"
    - VD: class d-flex => khi sử dụng md-d-flex
    - Responsive Class với: class d-flex => md-xl-d-flex

# Layout

## Breakpoints

    - Xài min-width cho breakpoints. (Mobile First)
    - Big Desktop      : 1400px - 2xl
    - Desktop          : 1200px - xl
    - Small Desktop    : 992px  - lg
    - Tablet           : 768px  - md
    - Mobile           : 576px  - sm

## Container

    .container  none    width: 100%;
                sm :    min-width: 576px;
                md :    min-width: 768px;
                lg :    min-width: 992px;
                xl :    min-width: 1200px;
                2xl:    min-width: 1400px;

## Display

    .d-none             display: none;
    .d-flex             display: flex;
    .d-inline-flex      display: inline-flex;
    .d-block            display: block;
    .d-inline-block     display: inline-block;
    .d-inline           display: inline;
    .d-table            display: table;

## Grid System (lưới 12)

    range từ 1 - 12

    .row                display: flex;
                        flex-wrap: wrap;

    .col-<range>        max-width: <range>/12 * 100(%)

## Flexbox

    .flex-row             flex-direction: row;
    .flex-col             flex-direction: column;
    .flex-row-re          flex-direction: row-reverse;
    .flex-col-re          flex-direction: column-reverse;

    .wrap                 flex-wrap: wrap;
    .nowrap               flex-wrap: nowrap;
    .wrap-re              flex-wrap: wrap-reverse;

## Position

    .relative          position: relative;
    .absolute          position: absolute;
    .fixed             position: fixed;
    .sticky            position: sticky;

## Visible

    .visible          visibility: visible;
    .invisible        visibility: hidden;

## Spacing

    .margin          range 1 - 100
      - t: top
      - b: bottom
      - l: left
      - r: right
      - x: trục X
      - y: trục Y
    VD: md-mt-5: margin-top: 5px;

    .padding         range 1 - 100
      - t: top
      - b: bottom
      - l: left
      - r: right
      - x: trục X
      - y: trục Y
    VD: md-pt-5: padding-top: 5px;

## Opacity

    .opacity          range 0 - 80

    VD: md-opacity-50 => opacity: 0.5

## Text Align

    .text-center           text-align: center;
    .text-right            text-align: right;
    .text-left             text-align: left;
    .text-justify          text-align: justify;

## Border-radius

    .border-circle           border-radius: 50%;
    .border-4                border-radius: 4px;
    .border-8                border-radius: 8px;

## Border

    .border-<color>               border: 1px solid <color>;
    .border-top-<color>           border-top: 1px solid <color>;
    .border-left-<color>          border-left: 1px solid <color>;
    .border-bottom-<color>        border-bottom: 1px solid <color>;
    .border-right-<color>         border-right: 1px solid <color>;

    biến màu: styles/common/_border.scss => $colors

## Box-Alignment

    .justify-start                justify-content: flex-start;
    .justify-end                  justify-content: flex-end;
    .justify-center               justify-content: center;
    .justify-between              justify-content: space-between;
    .justify-around               justify-content: space-around;

    .justify-items-start          justify-items: flex-start;
    .justify-items-end            justify-items: flex-end;
    .justify-items-center         justify-items: center;
    .justify-items-stretch        justify-items: stretch;

    .justify-self-start           justify-self: flex-start;
    .justify-self-end             justify-self: flex-end;
    .justify-self-center          justify-self: center;
    .justify-self-stretch         justify-self: stretch;

    .content-start                align-content: flex-start;
    .content-end                  align-content: flex-end;
    .content-center               align-content: center;
    .content-between              align-content: space-between;
    .content-around               align-content: space-around;

    .items-start                  align-items: flex-start;
    .items-end                    align-items: flex-end;
    .items-center                 align-items: center;
    .items-stretch                align-items: stretch;
    .items-baseline               align-items: baseline;

    .self-start                   align-self: flex-start;
    .self-end                     align-self: flex-end;
    .self-center                  align-self: center;
    .self-stretch                 align-self: stretch;
    .self-baseline                align-self: baseline;

# License

This project is licensed under the MIT license

<img src="https://hrw.hstatic.net/35/17937/febb554ed7a444e2a222465bf46b6647.png" width="200" />
