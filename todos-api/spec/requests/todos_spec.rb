require  'rails_helper'

RSpec.describe 'Todos API', type: :request do
    let(:user) { create(:user) }
    let!(:todos) { create_list(:todo, 10, created_by: user.id) }
    let(:todo_id) { todos.first.id }
    let(:headers) { valid_headers }

    describe 'GET /todos' do
        before { get '/todos', params: {}, headers: headers }

        it 'returns todos' do
            expect(json).not_to be_empty
            expect(json.size).to eq(10)
        end

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end
    end

    describe 'GET /todos/:id' do
        before { get "/todos/#{todo_id}", params: {}, headers: headers }

        context 'when the record exists' do
            it 'returns status code 200' do
                expect(response).to have_http_status(200)
            end
        end

        context 'when it doesn\'t' do
            let(:todo_id) { 100 }

            it 'returns 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns not found message' do
                expect(response.body).to match(/Couldn't find Todo/)
            end
        end
    end

    describe 'POST /todos' do
        let(:valid_attributes) { { title: 'Learn Elm', created_by: user.id.to_s }.to_json }

        context 'when the request is valid' do
            before { post '/todos', params: valid_attributes, headers: headers }

            it 'creates a todo' do
                expect(json['title']).to eq('Learn Elm')
            end

            it 'returns status code 201' do
                expect(response).to have_http_status(201)
            end
        end

        context 'when it doesn\'t' do
            let(:invalid_attributes) { { title: nil }.to_json }
            before { post '/todos', params: invalid_attributes, headers: headers }

            it 'returns 422' do
                expect(response).to have_http_status(422)
            end

            it 'returns validation message' do
                expect(response.body).to match(/Validation failed: Title can't be blank/)
            end
        end
    end

    describe 'PUT /todos/:id' do
        let(:valid_attributes) { { title: 'New title' }.to_json }

        context 'when the record exists' do
            before { put "/todos/#{todo_id}", params: valid_attributes, headers: headers }

            it 'updates a todo' do
                expect(response.body).to be_empty
            end

            it 'returns status code 204' do
                expect(response).to have_http_status(204)
            end
        end

        context 'when it doesn\'t' do
            before { put "/todos/666", params: valid_attributes, headers: headers }

            it 'returns 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns validation message' do
                expect(response.body).to match(/Couldn't find Todo with 'id'=666/)
            end
        end
    end

    describe 'DELETE /todos/:id' do
        before { delete "/todos/#{todo_id}", headers: headers }
        
        it 'returns status code 204' do
            expect(response).to have_http_status(204)
        end
    end
end