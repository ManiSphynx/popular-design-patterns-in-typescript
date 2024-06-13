import { ProxyImage } from './proxy-image';

const image = new ProxyImage('high_res_image.png');
image.display();  // Loading high_res_image.png
                  // Displaying high_res_image.png
image.display();  // Displaying high_res_image.png
