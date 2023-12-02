interface Props {
  children: string;
  link: string;
}

const RefHeader = ({ children, link }: Props) => {
  return (
    <div className="refheader">
      <div
        onClick={() =>
          window.open(
            "#" +
              {
                toString() {
                  return link;
                },
                link,
              },
            "_self"
          )
        }
      >
        <h3>{children}</h3>
      </div>
    </div>
  );
};

export default RefHeader;
