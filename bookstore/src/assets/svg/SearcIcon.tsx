type IconProps = React.SVGProps<SVGSVGElement>;

export const SearchIcon = (props:IconProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_1795_191)">
                <path d="M18.6667 18.6667L14.6791 14.672M16.8889 9.33333C16.8889 11.3372 16.0929 13.259 14.6759 14.6759C13.259 16.0929 11.3372 16.8889 9.33333 16.8889C7.32947 16.8889 5.40768 16.0929 3.99074 14.6759C2.5738 13.259 1.77777 11.3372 1.77777 9.33333C1.77777 7.32948 2.5738 5.40769 3.99074 3.99075C5.40768 2.57381 7.32947 1.77778 9.33333 1.77778C11.3372 1.77778 13.259 2.57381 14.6759 3.99075C16.0929 5.40769 16.8889 7.32948 16.8889 9.33333V9.33333Z" stroke="#090937" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
            </g>
            <defs>
                <clipPath id="clip0_1795_191">
            <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    )
}