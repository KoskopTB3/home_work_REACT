import CreateItem from "./CreateItem";



function WebPage({ webDataList }) {
  return (
    <>
      {webDataList && (
        <div>
          {webDataList.map((data, index) => (
            <div key={index}>
              <CreateItem {...data} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default WebPage;
