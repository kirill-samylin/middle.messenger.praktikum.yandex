enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
};

type TData = { [key: string]: string };
type TOptions = {
  data?: TData,
  method: METHODS,
  headers?: TData,
  timeout?: number
};

function queryStringify(data: TData = {}): string {
  let str = '?';
  for (let key in data) {
    str+= `${key}=${data[key]}&`; 
  }
  return str.slice(0, str.length-1);
}
  
export class HTTPTransport {
  get = (url: string, options: TOptions) => {
    return this.request(`${url}${queryStringify(options.data)}`, {...options, method: METHODS.GET});
  };
  put = (url: string, options: TOptions) => {
    return this.request(url, {...options, method: METHODS.PUT});
  };
  post = (url: string, options: TOptions) => {
    return this.request(url, {...options, method: METHODS.POST});
  };
  delete = (url: string, options: TOptions) => {
    return this.request(url, {...options, method: METHODS.DELETE});
  };
  request(url: string, options: TOptions) {
    const { method, data, headers={}, timeout=5000 } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      for (let header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }
      xhr.timeout = timeout;
      xhr.onload = function() {
        resolve(xhr);
      };
      
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      if (method === 'GET' || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}