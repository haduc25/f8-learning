import Button from '~/components/Button';

function MenuItem({ data }) {
    // test
    // console.log(data);
    // return <button>{data.title}</button>;
    // return <button>{JSON.stringify(data)}</button>;

    return (
        <Button leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
