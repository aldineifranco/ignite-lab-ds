import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={80}
      height={92}
      viewBox="0 0 80 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80 45.587c0-5.3-6.637-10.322-16.812-13.437 2.348-10.37 1.305-18.622-3.294-21.263-1.06-.62-2.3-.914-3.653-.914v3.637c.75 0 1.354.147 1.86.424 2.217 1.272 3.18 6.115 2.429 12.344-.18 1.533-.473 3.147-.832 4.794-3.196-.783-6.685-1.386-10.354-1.777-2.202-3.017-4.485-5.757-6.784-8.154 5.316-4.94 10.306-7.647 13.698-7.647V9.957c-4.485 0-10.355 3.196-16.29 8.74-5.936-5.511-11.807-8.675-16.29-8.675v3.637c3.375 0 8.38 2.69 13.697 7.599a77.03 77.03 0 00-6.735 8.137c-3.685.39-7.175.994-10.37 1.793a49.19 49.19 0 01-.849-4.729c-.766-6.229.18-11.072 2.38-12.36.49-.293 1.126-.424 1.876-.424V10.04c-1.37 0-2.609.293-3.685.913-4.582 2.642-5.61 10.876-3.245 21.215C6.604 35.297 0 40.304 0 45.587c0 5.3 6.637 10.322 16.812 13.437-2.348 10.37-1.305 18.622 3.294 21.263 1.06.62 2.3.913 3.669.913 4.484 0 10.355-3.196 16.29-8.74 5.936 5.512 11.806 8.675 16.29 8.675 1.37 0 2.61-.293 3.686-.913 4.582-2.641 5.61-10.876 3.245-21.215C73.396 55.893 80 50.87 80 45.587zM58.769 34.71a73.472 73.472 0 01-2.201 6.442 77.247 77.247 0 00-2.137-3.914 88.264 88.264 0 00-2.348-3.816c2.316.343 4.55.767 6.686 1.289zM51.3 52.078c-1.271 2.201-2.576 4.289-3.93 6.23-2.43.211-4.891.325-7.37.325-2.462 0-4.925-.114-7.338-.31a89.9 89.9 0 01-3.946-6.196 84.919 84.919 0 01-3.392-6.49A85.032 85.032 0 0128.7 39.13c1.271-2.202 2.576-4.289 3.93-6.23a84.842 84.842 0 017.37-.326c2.462 0 4.925.114 7.338.31a89.9 89.9 0 013.946 6.197 84.919 84.919 0 013.392 6.49 91.297 91.297 0 01-3.376 6.506zm5.268-2.12c.88 2.185 1.63 4.37 2.25 6.49a73.18 73.18 0 01-6.718 1.305 90.06 90.06 0 002.348-3.865 92.602 92.602 0 002.12-3.93zm-16.535 17.4a67.253 67.253 0 01-4.534-5.219c1.468.065 2.968.114 4.485.114 1.532 0 3.049-.032 4.533-.114a63.674 63.674 0 01-4.484 5.218zM27.9 57.751a73.576 73.576 0 01-6.685-1.288 73.472 73.472 0 012.201-6.442 77.247 77.247 0 002.136 3.914 108.04 108.04 0 002.349 3.816zm12.051-33.934a67.253 67.253 0 014.533 5.218A100.985 100.985 0 0040 28.922c-1.533 0-3.05.032-4.533.114a63.674 63.674 0 014.484-5.218zm-12.067 9.604a90.06 90.06 0 00-4.468 7.779 69.911 69.911 0 01-2.25-6.49 79.185 79.185 0 016.718-1.289zM13.127 53.838c-5.773-2.462-9.507-5.69-9.507-8.251 0-2.56 3.734-5.805 9.507-8.251 1.402-.603 2.935-1.142 4.517-1.647.93 3.196 2.152 6.523 3.669 9.93-1.5 3.392-2.707 6.703-3.62 9.882a49.526 49.526 0 01-4.566-1.663zM21.9 77.14c-2.218-1.272-3.18-6.115-2.43-12.344.18-1.533.473-3.147.832-4.794 3.196.783 6.685 1.386 10.354 1.777 2.202 3.017 4.485 5.757 6.784 8.154-5.316 4.94-10.306 7.647-13.698 7.647-.733-.016-1.353-.163-1.842-.44zm38.679-12.425c.766 6.229-.18 11.072-2.38 12.36-.49.293-1.126.424-1.876.424-3.376 0-8.382-2.69-13.698-7.599a77.03 77.03 0 006.735-8.137c3.685-.391 7.175-.995 10.37-1.794.376 1.647.67 3.23.849 4.746zm6.278-10.877c-1.402.603-2.935 1.142-4.517 1.647-.93-3.196-2.153-6.523-3.669-9.93 1.5-3.392 2.707-6.703 3.62-9.882a51.707 51.707 0 014.582 1.663c5.773 2.462 9.507 5.69 9.507 8.251-.016 2.56-3.75 5.805-9.523 8.251z"
        fill="#61DAFB"
      />
      <path
        d="M39.984 53.04a7.452 7.452 0 100-14.905 7.452 7.452 0 000 14.904z"
        fill="#61DAFB"
      />
    </svg>
  );
}
