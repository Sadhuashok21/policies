import React from 'react';

export interface IconProps {
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const CookieIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-cookie svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z" />
  </svg>
);

export const CameraIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-camera svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-shield svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
  </svg>
);

export const MicIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-mic svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-geo-alt-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
);

export const BellIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-bell svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-search svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-globe svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
  </svg>
);

export const AlphabetIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-alphabet svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552s.864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582m.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864m5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338z" />
  </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-credit-card svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
  </svg>
);

export const ChildIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="currentColor"
    className={`svg-icon ${className}`}
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M425.39,200.035A184.3,184.3,0,0,0,290.812,91.289L317.568,48.48,290.432,31.52,255.127,88.008A184.046,184.046,0,0,0,86.61,200.035a71.978,71.978,0,0,0,0,143.93,184.071,184.071,0,0,0,338.78,0,71.978,71.978,0,0,0,0-143.93Zm27.152,99.975a39.77,39.77,0,0,1-27.76,11.961l-20.725.394-8.113,19.074a152.066,152.066,0,0,1-279.887,0l-8.114-19.074-20.725-.394a39.978,39.978,0,0,1,0-79.942l20.725-.394,8.114-19.074a152.067,152.067,0,0,1,279.887,0l8.113,19.074,20.725.394a39.974,39.974,0,0,1,27.76,67.981Z" />
    <rect width="40" height="40" x="168" y="232" />
    <rect width="40" height="40" x="304" y="232" />
    <path d="M256,384a80,80,0,0,0,80-80H176A80,80,0,0,0,256,384Z" />
  </svg>
);

export const AccessibilityIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`svg-icon ${className}`}
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 6.82954C10.1652 6.4177 11 5.30646 11 4.00024C11 2.34339 9.65686 1.00024 8 1.00024C6.34315 1.00024 5 2.34339 5 4.00024C5 5.30646 5.83481 6.4177 7 6.82954V12.0002C7 13.6571 8.34315 15.0002 10 15.0002H14.9296C15.264 15.0002 15.5762 15.1673 15.7617 15.4455L18.4913 19.54C19.1914 20.5901 20.6772 20.7373 21.5696 19.8448L22.7071 18.7074C23.0976 18.3168 23.0976 17.6837 22.7071 17.2931C22.3166 16.9026 21.6834 16.9026 21.2929 17.2931L20.1554 18.4306L17.4258 14.3361C16.8694 13.5015 15.9327 13.0002 14.9296 13.0002H10C9.44772 13.0002 9 12.5525 9 12.0002V11.0002H15C15.5523 11.0002 16 10.5525 16 10.0002C16 9.44796 15.5523 9.00025 15 9.00025H9V6.82954ZM8 5.10758C7.38844 5.10758 6.89267 4.61181 6.89267 4.00024C6.89267 3.38868 7.38844 2.89291 8 2.89291C8.61157 2.89291 9.10734 3.38868 9.10734 4.00024C9.10734 4.61181 8.61157 5.10758 8 5.10758Z"
      fill="currentColor"
    />
    <path
      d="M4.6328 9.07414C5.10517 8.78987 5.69738 9.0279 5.91645 9.53381C6.13552 10.0397 5.89604 10.6205 5.43795 10.9272C4.92993 11.2673 4.48018 11.6911 4.10882 12.1826C3.53598 12.9408 3.16922 13.8345 3.04425 14.7765C2.91928 15.7185 3.04036 16.6768 3.3957 17.5582C3.75103 18.4395 4.32852 19.2138 5.07194 19.8058C5.81535 20.3977 6.69937 20.787 7.63791 20.9359C8.57646 21.0847 9.53756 20.988 10.4276 20.6552C11.3177 20.3223 12.1065 19.7647 12.7171 19.0366C13.1129 18.5645 13.4251 18.0313 13.6428 17.46C13.8391 16.9448 14.3514 16.5813 14.8936 16.6815C15.4357 16.7816 15.8004 17.3054 15.6291 17.8295C15.3326 18.7372 14.8644 19.583 14.2468 20.3194C13.4147 21.3117 12.3399 22.0716 11.1269 22.5252C9.91394 22.9787 8.6042 23.1105 7.32518 22.9077C6.04617 22.7048 4.84148 22.1742 3.82838 21.3676C2.81528 20.561 2.02831 19.5058 1.54407 18.3047C1.05983 17.1037 0.894836 15.7977 1.06514 14.5139C1.23545 13.2302 1.73525 12.0124 2.51589 10.9791C3.09523 10.2123 3.81459 9.56654 4.6328 9.07414Z"
      fill="currentColor"
    />
  </svg>
);

export const DataCollectionIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-bar-chart-line svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
  </svg>
);

export const TermsIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-file-earmark-text svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
  </svg>
);

export const DisclaimerIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-exclamation-triangle svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
  </svg>
);

export const FlaskIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-funnel svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-check-lg svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-check-circle svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-x-lg svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
  </svg>
);

export const XCircleIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-x-circle svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
  </svg>
);

export const HourglassIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-hourglass-split svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 4V3h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.279 3-1.5z" />
  </svg>
);

export const CircleDotIcon: React.FC<IconProps & { color?: string }> = ({
  size = 16,
  className = '',
  style,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color || 'currentColor'}
    className={`bi bi-circle-fill svg-icon ${className}`}
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <circle cx="8" cy="8" r="5" />
  </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-file-text svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
  </svg>
);

export const DocumentListIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-card-checklist svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-chevron-up svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-chevron-down svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-lock-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 1a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2m0 1a1 1 0 0 1 1 1v2H7V3a1 1 0 0 1 1-1" />
  </svg>
);

export const StorageIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-hdd-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M.91 7.204A2.99 2.99 0 0 1 2 7h12c.384 0 .752.072 1.09.204l-1.867-3.422A1.5 1.5 0 0 0 11.906 3H4.094a1.5 1.5 0 0 0-1.317.782z" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-people-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
  </svg>
);

export const FingerprintIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-fingerprint svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 0a8 8 0 0 0-8 8c0 3.298 2.006 6.13 4.887 7.33a.5.5 0 0 0 .39-.92A7.002 7.002 0 0 1 1 8a7 7 0 1 1 14 0 6.97 6.97 0 0 1-1.258 3.995.5.5 0 0 0 .848.53A7.97 7.97 0 0 0 16 8a8 8 0 0 0-8-8" />
    <path d="M8 2a6 6 0 0 0-6 6c0 2.57 1.63 4.76 3.928 5.578a.5.5 0 0 0 .336-.942A5.002 5.002 0 0 1 3 8a5 5 0 0 1 10 0 4.98 4.98 0 0 1-.77 2.68.5.5 0 1 0 .832.553A5.98 5.98 0 0 0 14 8a6 6 0 0 0-6-6" />
    <path d="M8 4a4 4 0 0 0-4 4c0 1.84 1.25 3.39 2.97 3.82a.5.5 0 1 0 .24-.97A3.003 3.003 0 0 1 5 8a3 3 0 1 1 6 0 2.99 2.99 0 0 1-.29 1.3.5.5 0 1 0 .9.43A3.99 3.99 0 0 0 12 8a4 4 0 0 0-4-4" />
    <path d="M8 6a2 2 0 0 0-2 2 .5.5 0 0 0 1 0 1 1 0 1 1 2 0c0 .41-.12.79-.32 1.11a.5.5 0 1 0 .85.52A3.01 3.01 0 0 0 10 8a2 2 0 0 0-2-2" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-person-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-key-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1.337-1.337A3.5 3.5 0 0 1 3.5 11.5M3 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
  </svg>
);

export const LightbulbIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-lightbulb-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1l-.224-.447a1 1 0 0 1-.894-.553H6.618a1 1 0 0 1-.894.553L5.5 14z" />
  </svg>
);

export const BanIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-slash-circle svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708" />
  </svg>
);

export const ScaleIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`svg-icon ${className}`}
    viewBox="0 0 24 24"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M12 2C11.45 2 11 2.45 11 3V5.08C8.16 5.56 6 8.03 6 11V12.08C4.16 12.56 2.74 14.15 2.53 16.14C2.26 18.66 4.25 21 6.78 21C9.07 21 11 19.14 11 16.85V7.08C11.32 7.03 11.66 7 12 7C12.34 7 12.68 7.03 13 7.08V16.85C13 19.14 14.93 21 17.22 21C19.75 21 21.74 18.66 21.47 16.14C21.26 14.15 19.84 12.56 18 12.08V11C18 8.03 15.84 5.56 13 5.08V3C13 2.45 12.55 2 12 2ZM6.78 19C5.45 19 4.39 17.75 4.52 16.35C4.64 15.08 5.71 14 7 14C8.1 14 9 14.9 9 16C9 17.65 7.65 19 6.78 19ZM17.22 19C16.35 19 15 17.65 15 16C15 14.9 15.9 14 17 14C18.29 14 19.36 15.08 19.48 16.35C19.61 17.75 18.55 19 17.22 19Z" />
  </svg>
);

export const DoorExitIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-door-closed svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z" />
    <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
  </svg>
);

export const LandmarkIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-bank svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.382l.5 2a.498.498 0 0 1-.485.618H.5a.5.5 0 0 1-.485-.618l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-info-circle svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-briefcase svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm3 1a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zM1 6.5V4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v2L8.5 9a1.5 1.5 0 0 1-1 0zM1 7.828l6.836 2.441a2.5 2.5 0 0 0 1.328 0L15 7.828V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5z" />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-link-45deg svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243z" />
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-bullseye svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
  </svg>
);

export const RulerIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-rulers svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V5H2V4h2V3H2V2h4V1H1zm7 0v1h4v1H8v1h2v1H8v1h4v1H8v1h2v1H8v1h4v1H8v1h2v1H8v1h4v1H8v1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-stars svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794.11a.207.207 0 0 1 .393 0l.242.726a1.66 1.66 0 0 0 1.05 1.05l.725.242a.207.207 0 0 1 0 .393l-.726.242a1.66 1.66 0 0 0-1.05 1.05l-.242.725a.207.207 0 0 1-.393 0l-.242-.726a1.66 1.66 0 0 0-1.05-1.05l-.725-.242a.207.207 0 0 1 0-.393l.726-.242a1.66 1.66 0 0 0 1.05-1.05zm8.416 10.63a.207.207 0 0 1 .393 0l.242.726a1.66 1.66 0 0 0 1.05 1.05l.726.242a.207.207 0 0 1 0 .393l-.726.242a1.66 1.66 0 0 0-1.05 1.05l-.242.725a.207.207 0 0 1-.393 0l-.242-.726a1.66 1.66 0 0 0-1.05-1.05l-.725-.242a.207.207 0 0 1 0-.393l.726-.242a1.66 1.66 0 0 0 1.05-1.05z" />
  </svg>
);

export const ChatBubbleIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-chat-dots-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
  </svg>
);

export const FamilyIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-people svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
  </svg>
);

export const SirenIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-shield-exclamation svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
  </svg>
);

export const GearIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-gear-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
  </svg>
);

export const RefreshCycleIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-arrow-repeat svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
  </svg>
);

export const BuildingIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-building svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
  </svg>
);

export const InboxIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-inbox-fill svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a1 1 0 0 1 .11.812l-1.5 6A1 1 0 0 1 13.53 16H2.47a1 1 0 0 1-.97-.799l-1.5-6a1 1 0 0 1 .11-.813zm-1.87 5.75L3.11 15h9.78l1.17-5.687H11.5A2.5 2.5 0 0 1 9 11.5a2.5 2.5 0 0 1-2.5-2.187z" />
  </svg>
);

export const HandshakeIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`svg-icon ${className}`}
    viewBox="0 0 24 24"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M21.71 8.71C20.84 7.84 19.54 7.73 18.54 8.36L15.5 5.32C15.11 4.93 14.48 4.93 14.09 5.32L12.37 7.04C12.18 6.96 11.97 6.92 11.75 6.92C11.16 6.92 10.61 7.2 10.25 7.69L9.12 6.56C8.73 6.17 8.1 6.17 7.71 6.56L5.32 8.95C4.93 9.34 4.93 9.97 5.32 10.36L7.4 12.44L3.29 16.55C2.9 16.94 2.9 17.57 3.29 17.96L6.04 20.71C6.43 21.1 7.06 21.1 7.45 20.71L12.21 15.95C12.45 16 12.72 16 13 16C13.55 16 14.05 15.78 14.41 15.41L16.09 17.09C16.48 17.48 17.11 17.48 17.5 17.09L21.71 12.88C22.88 11.71 22.88 9.88 21.71 8.71ZM18.59 14.59L17.5 13.5L18.91 12.09C19.3 11.7 19.3 11.07 18.91 10.68C18.52 10.29 17.89 10.29 17.5 10.68L15 13.18C14.81 13.37 14.55 13.48 14.28 13.48C13.73 13.48 13.28 13.03 13.28 12.48C13.28 12.21 13.39 11.95 13.58 11.76L16.08 9.26C16.47 8.87 16.47 8.24 16.08 7.85C15.69 7.46 15.06 7.46 14.67 7.85L12.17 10.35C11.98 10.54 11.72 10.65 11.45 10.65C10.9 10.65 10.45 10.2 10.45 9.65C10.45 9.38 10.56 9.12 10.75 8.93L12.47 7.21L13.88 8.62L11.76 10.74C11.37 11.13 11.37 11.76 11.76 12.15C12.15 12.54 12.78 12.54 13.17 12.15L15.29 10.03L16.71 11.44L14.59 13.56C14.2 13.95 14.2 14.58 14.59 14.97C14.98 15.36 15.61 15.36 16 14.97L18.12 12.85L19.54 14.27L18.59 14.59Z" />
  </svg>
);

export const FileEditIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-pencil-square svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
  </svg>
);

export const StopwatchIcon: React.FC<IconProps> = ({ size = 16, className = '', style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={`bi bi-stopwatch svg-icon ${className}`}
    viewBox="0 0 16 16"
    style={{ verticalAlign: 'middle', display: 'inline-block', ...style }}
  >
    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.8 3.584 1.64l.012-.013.707-.707a.5.5 0 0 1 .707.707l-.707.707.013.012c.84.99 1.444 2.224 1.64 3.584H15.5a.5.5 0 0 1 0 1h-.57c-.196 1.36-.8 2.594-1.64 3.584l.013.012.707.707a.5.5 0 0 1-.707.707l-.707-.707-.012.013a7 7 0 1 1-6.8-11.233V1.5A.5.5 0 0 1 6.5 1M8 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
  </svg>
);
