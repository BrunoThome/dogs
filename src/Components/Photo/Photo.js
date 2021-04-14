import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { loading, error, data, request } = useFetch();

  React.useEffect(
    function () {
      const { url } = PHOTO_GET(id);
      request(url);
    },
    [id, request],
  );

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;
