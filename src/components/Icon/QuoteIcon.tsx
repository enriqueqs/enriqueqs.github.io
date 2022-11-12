import { FC, memo } from "react";

import Icon, { IconProps } from "./Icon";

const QuoteIcon: FC<IconProps> = memo((props) => (
  <Icon {...props}>
    <path
      d="M26.3657 53.7076C27.9274 43.8912 40.1978 33.4056 49.791 33.1825C50.4603 33.1825 51.1296 32.9594 51.5758 32.5132C52.022 32.2901 52.4682 32.067 52.6913 31.3978C56.0377 25.151 54.253 20.2428 48.6755 16.2271C42.2057 11.542 31.9431 16.2271 26.8119 20.4659C13.8722 31.1747 0.709398 49.6914 1.37869 67.3166C-0.852289 79.1411 -0.406093 91.8573 2.94038 102.343C5.17136 109.036 11.6412 112.382 18.3342 112.829C25.0271 113.275 38.8592 115.283 44.8828 111.267C50.9065 107.251 51.3527 99.4427 52.022 92.7501C52.6913 85.3879 54.6991 71.5554 48.4524 65.7549C42.2057 60.1774 24.3578 66.2011 26.3657 53.7076Z"
      fill="currentColor"
    />
    <path
      d="M99.9881 53.7076C101.55 43.8912 113.82 33.4056 123.413 33.1825C124.083 33.1825 124.752 32.9594 125.198 32.5132C125.645 32.2901 126.091 32.067 126.314 31.3978C129.66 25.151 127.876 20.2428 122.298 16.2271C115.828 11.542 105.566 16.2271 100.434 20.4659C87.4946 31.1747 74.3318 49.6918 75.0011 67.3166C72.7701 79.1411 73.2163 91.8573 76.5624 102.343C78.7934 109.036 85.2632 112.382 91.9565 112.829C98.6495 113.275 112.482 115.283 118.505 111.267C124.528 107.251 124.975 99.4427 125.644 92.7501C126.314 85.3879 128.322 71.5554 122.075 65.7549C115.828 60.1774 97.7571 66.2011 99.9881 53.7076Z"
      fill="currentColor"
    />
  </Icon>
));

QuoteIcon.displayName = "QuoteIcon";
export default QuoteIcon;
