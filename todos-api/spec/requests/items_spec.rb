require  'rails_helper'

RSpec.describe 'Items API', type: :request do
    let(:user) { create(:user) }
    let!(:todo) { create(:todo, created_by: user.id) }
    let!(:items) { create_list(:item, 20, todo_id: todo.id) }
    let(:todo_id) { todo.id }
    let(:id) { items.first.id }
    let(:headers) { valid_headers }

    describe 'GET /todos/:todo_id/items' do
        before { get "/todos/#{todo_id}/items", params: {}, headers: headers }

        context 'when the record exists' do
            it 'returns status code 200' do
                expect(response).to have_http_status(200)
            end

            it 'returns all items' do
                expect(json.size).to eq(20)
            end
        end

        context 'when it doesn\'t ' do
            let(:todo_id) { 0 }

            it 'returns status code 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns all items' do
                expect(response.body).to match(/Couldn't find Todo/)
            end
        end
        

        it 'returns status code 200' do
            expect(response).to have_http_status(200)
        end
    end

    describe 'GET /todos/:todo_id/items/:id' do
        before { get "/todos/#{todo_id}/items/#{id}", params: {}, headers: headers }

        context 'when the record exists' do
            it 'returns status code 200' do
                expect(response).to have_http_status(200)
            end

            it 'returns item' do
                expect(json['id']).to eq(id)
            end
        end

        context 'when it doesn\'t' do
            let(:id) { 0 }

            it 'returns 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns not found message' do
                expect(response.body).to match(/Couldn't find Item/)
            end
        end
    end

    describe 'POST /todos/:todo_id/items' do
        let(:valid_attributes) { { name: 'Visit Narnia', done: false }.to_json }

        context 'when the request is valid' do
            before { post "/todos/#{todo_id}/items", params: valid_attributes, headers: headers }

            it 'returns status code 201' do
                expect(response).to have_http_status(201)
            end

        end

        context 'when it\'s not' do
            before { post "/todos/#{todo_id}/items", params: {}, headers: headers }

            it 'returns 422' do
                expect(response).to have_http_status(422)
            end

            it 'returns validation message' do
                expect(response.body).to match(/Validation failed: Name can't be blank/)
            end
        end
    end

    describe 'PUT /todos/:todo_id/items/:id' do
        let(:valid_attributes) { { name: 'Beethoven' }.to_json }

        before { put "/todos/#{todo_id}/items/#{id}", params: valid_attributes, headers: headers }

        context 'when the record exists' do
            it 'returns status code 204' do
                expect(response).to have_http_status(204)
            end

            it 'updates the item' do
                updated_item = Item.find(id)
                expect(updated_item.name).to match(/Beethoven/)
            end

        end

        context 'when it doesn\'t' do
            let(:id) { 0 }

            it 'returns 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns validation message' do
                expect(response.body).to match(/Couldn't find Item/)
            end
        end
    end

    describe 'DELETE /todos/:todo_id/items/:id' do
        before { delete "/todos/#{todo_id}/items/#{id}", params: {}, headers: headers }
    
        it 'returns status code 204' do
          expect(response).to have_http_status(204)
        end
    end
end