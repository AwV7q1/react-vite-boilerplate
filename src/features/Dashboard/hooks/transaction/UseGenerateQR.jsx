import {useState, useEffect} from 'react';
import {useMutation} from "@tanstack/react-query";
import {generateQR} from "@features/Dashboard/services/transaction/generateQR.service.js";
import {toast} from "react-toastify";

const UseGenerateQR = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const {
    mutate: mutateGenerateQR,
    isPending: pendingGenerateQR,
  } = useMutation({
    mutationFn: ({ amount, content }) => generateQR({ amount, content }),
    onSuccess: async (blobResponse) => {
      const imageUrl = URL.createObjectURL(blobResponse);
      setImgUrl(imageUrl);
    },
    onError: (error) => {
      setErrorMessage(error.message);
      toast(error.message);
    }
  });

  useEffect(() => {
    return () => {
      if (imgUrl) URL.revokeObjectURL(imgUrl);
    };
  }, [imgUrl]);


  return {mutateGenerateQR, pendingGenerateQR, errorMessage, imgUrl};
};

export default UseGenerateQR;