import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className='container'>
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">The First task Title</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" id ="btn"class="btn btn-light">Done</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">The Second task Title</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-light">Done</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
