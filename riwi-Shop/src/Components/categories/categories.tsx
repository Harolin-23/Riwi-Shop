import React from 'react';

import './categories.scss'


interface Category {
    id: number;
    name: string;
}

interface CategoriesProps {
    categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ }) => {
    return (
        <section className="categories">
        <div className="tex-andMetaAR">
            <p className="texlang">Shop From <span className="p-1Alt">Top Categories</span></p>
            <a className="link-more" href="">View All</a>
        
        </div>
        <div className="categoriesBot-1">
            <div className="ct-1 redon-but-cat">
                <p className="toy" id="btcategori">toys</p>
            </div>
            <div className="ct-1 redon-but-cat">
                <p className="cloch" id="btcategori">clothes</p>

            </div>
            <div className="ct-1 redon-but-cat">
                <p className="term" id="btcategori">term</p>
                
            </div>
            <div className="ct-1 redon-but-cat">
                <p className="keyn" id="btcategori">keychains</p>
                
            </div>
        </div>
    </section>
    );
};

export default Categories;